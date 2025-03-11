import axios from "axios"
import {asyncHandler} from '../utilities/asyncHandler.js'
import {ApiResponse} from '../utilities/ApiResponse.js'
import {ApiError} from '../utilities/ApiError.js'
import {client} from '../config/redis.js'

function getTodayDate()
{
    const today = new Date();
    const day = String(today.getDate()).padStart(2,'0');
    const month = String(today.getMonth() + 1).padStart(2,'0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
}

export const weatherData = asyncHandler(async(req,res,next)=>
    {
        const city = req.query.city ; 
        const date = req.query.date || getTodayDate();
        console.log(city)
        if(!city)
        {
            console.log('hahaha')
            throw new ApiError(400,'No City Name present');
        }
        
        const cachedValue = await client.get(`${city}`);
        if(cachedValue)
        {
            return res.status(200).json(new ApiResponse(200,JSON.parse(cachedValue),'Data fetched Successfully'));
        
        }
        else{
            try{
                const response = await axios.get(`${process.env.API_URL}/${city}/${date}?key=${process.env.API_KEY}`);
                if(!response)
                {
                    throw new ApiError(404,'Unable to get response from API')
                }
                await client.set(`${city}`,JSON.stringify(response.data));
                await client.expire(`${city}`,600);
                return res.status(200).json(new ApiResponse(200,response.data,'Data fetched Successfully'))
            }
            catch(error){
                if(axios.isAxiosError(error))
                {
                    throw new ApiError(error.reponse?.status,error.response?.data)
                }
                throw new ApiError(404,'Unable to fetch the weather at the moment')
            }
        }

    })



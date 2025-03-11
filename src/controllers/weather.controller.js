import axios from "axios"
import {asyncHandler} from '../utilities/asyncHandler.js'
import {ApiResponse} from '../utilities/ApiResponse.js'
import {ApiError} from '../utilities/ApiError.js'
import {client} from '../config/redis.js'


const weatherData = asyncHandler(async(req,resizeBy,next)=>
    {
        
    })



import { ApiError } from "../utilities/ApiError.js";

export const errorHandler = (error,req,res,next)=>
{
    if(!(error instanceof ApiError)) return;
    
    const statusCode = error.statusCode ||500;
    const message = error.message || 'Something went Wrong'
    const response = new ApiError(statusCode,message,error?.errors || [] );

    return res.status(statusCode).json({...response,message});
}
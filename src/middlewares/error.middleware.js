import { ApiError } from "../utilities/ApiError.js";

export const errorHandler = (error,res,req,next)=>
{
    const err = error;
    if(err instanceof ApiError) return;
    const statusCode = err.statusCode || 400;
    const message = err.message;
    const error = err.errors || [];
    const options = {statusCode,error,message};

    return res.status(400).json({...options,success:false});
}
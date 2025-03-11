class ApiError extends Error
{
    constructor(statusCode,message =  'An error occured',errors = [])
    {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors
        this.message = message
        this.success = false
    }
}

export {ApiError};
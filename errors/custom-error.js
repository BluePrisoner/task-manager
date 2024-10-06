

class CustomAPIError extends Error{
    constructor(message, statusCode)
    {
        super(message);
        this.statusCode = statusCode;
    }
}

const customErrorHandler = (msg, statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}
module.exports = {CustomAPIError, customErrorHandler}
const createResponse=({status, data, message, error})=>{

    const response={
        status: status,
        message: message,
        data:{
            result:data ? data : null,
            length: data ? data.length : null,
        },
        error: error ? error : null
    }

    return response

}

module.exports = {createResponse}
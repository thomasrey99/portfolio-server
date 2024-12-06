const { createResponse } = require("../createResponse");
const dataMiddlewareValidator=async (req, res, next)=> {
  const {data} = req.body;
  if(data){
    next()
  }else{
    const response = await createResponse({
        status: "fail",
        message:`Se deben proporcionar datos`,
        data: null,
        error:true,
      });

      return res.status(400).json(response);
  }
};

module.exports = dataMiddlewareValidator;
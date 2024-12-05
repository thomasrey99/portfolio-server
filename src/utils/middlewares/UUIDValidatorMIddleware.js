const { isUUID } = require("validator");
const { createResponse } = require("../createResponse");
const UUIDValidatorMiddleware=async (req, res, next)=> {
  const {id} = req.params;
  if(id&&isUUID(id)){
    next()
  }else{
    const response = await createResponse({
        status: "fail",
        message:`UUID ${id} invalido`,
        data: null,
        error:true,
      });

      return res.status(400).json(response);
  }
};

module.exports = UUIDValidatorMiddleware;
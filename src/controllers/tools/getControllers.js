const {Tool}=require("../../db");

const getAllToolsController=async()=>{
    const tools=await Tool.findAll();
    return tools;
};

module.exports={
    getAllToolsController
};
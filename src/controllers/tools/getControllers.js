const {Tool}=require("../../db");

const getAllToolsController=async()=>{
    const tools=await Tool.findAll();
    return tools;
};

const getToolByIdController=async(id)=>{
    try {
        const tool=await Tool.findByPk(id);
        if(tool){
            return tool;
        }else{
            return false;
        };
    } catch (error) {
        return false;
    };
};


module.exports={
    getAllToolsController,
    getToolByIdController
};
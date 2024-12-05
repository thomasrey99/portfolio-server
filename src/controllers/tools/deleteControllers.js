const {Tool}=require("../../db");

const deleteToolController=async(id)=>{
    try {
        const tool=await Tool.findByPk(id);
        if (tool) {
            const deleteTool=await tool.destroy();
            if(deleteTool){
                return tool;
            }else{
                return false;
            };
        }else{
            return false;
        };
    } catch (error) {
        return false;
    };
};

module.exports = {
    deleteToolController
};
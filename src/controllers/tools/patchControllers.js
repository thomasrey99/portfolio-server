const {Tool}=require("../../db");

const patchToolController = async (id, data) => {

    try {

        const tool = await Tool.findByPk(id);
        if (!tool) {
            return false;
        };
        const updatedTool = await tool.update(data);
        if(updatedTool){
            return updatedTool;
        }else{
            
            return false;
            
        }

        

    } catch (error) {

        return false;

    };

};

module.exports = {
    patchToolController
};
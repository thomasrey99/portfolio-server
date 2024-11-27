const { getAllToolsController } = require("../../controllers/tools/getControllers");
const { createResponse } = require("../../utils/createResponse");

const getAllToolsHandler=async(req, res)=>{
    try {
        const tools=await getAllToolsController();
        const response=await createResponse(
            {
                status:"success",
                message:"Registros de herramientas obtenidos con exito",
                data:tools,
                error:false
            }
        )
        return res.status(200).json(response);
    } catch (error) {

        const response= await createResponse(
            {
                status:"error",
                message:"Error al cargar registros de herramientas",
                data:null,
                error:error.message,
            }
        )
        
        return res.status(400).json(response)

    }

}

module.exports = {
    getAllToolsHandler
}
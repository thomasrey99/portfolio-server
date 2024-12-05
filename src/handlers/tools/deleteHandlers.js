const { isUUID } = require('validator');
const { createResponse } = require('../../utils/createResponse');
const { deleteToolController } = require('../../controllers/tools/deleteControllers');

const deleteToolHandler=async(req, res)=>{
    try {
        const {id}=req.params;
        if(isUUID(id)){
            const deleteTool=await deleteToolController(id);
            if(deleteTool){
                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registro de la herramienta eliminado con exito",
                        data:deleteTool,
                        error:false,
                    }
                );

                return res.status(200).json(response);
            }else{
                const response= await createResponse(
                    {
                        status:"error",
                        message:"Error al eliminar registro de herramienta",
                        data:null,
                        error:true,
                    }
                );

                return res.status(400).json(response);
            };
        }else{
            const response= await createResponse(
                {
                    status:"error",
                    message:"Error al eliminar registro",
                    data:null,
                    error:`Registro con ${id} no encontrado`,
                }
            );

            return res.status(400).json(response);
        }
    } catch (error) {
        const response= await createResponse(
            {
                status:"error",
                message:"Error al eliminar registro de herramienta",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);
    }

}

module.exports={
    deleteToolHandler,
}
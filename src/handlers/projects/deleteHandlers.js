const { isUUID } = require('validator');
const { createResponse } = require('../../utils/createResponse');
const { deleteProjectController } = require('../../controllers/projects/deleteControllers');

const deleteProjectHandler=async(req, res)=>{
    try {
        const {id}=req.params;
        if(isUUID(id)){
            const deleteProject=await deleteProjectController(id);
            if(deleteProject){
                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registro del proyecto eliminado con exito",
                        data:deleteProject,
                        error:false,
                    }
                );

                return res.status(200).json(response);
            }else{
                const response= await createResponse(
                    {
                        status:"error",
                        message:"Error al eliminar registro del proyecto",
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
                message:"Error al eliminar registro del proyecto",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);
    }

}

module.exports={
    deleteProjectHandler,
}
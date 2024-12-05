const { isUUID } = require('validator');
const { createResponse } = require('../../utils/createResponse');
const { deleteExperienceController } = require('../../controllers/experience/deleteControllers');

const deleteExperienceHandler=async(req, res)=>{
    try {
        const {id}=req.params;
        if(isUUID(id)){
            const deleteExperience=await deleteExperienceController(id);
            if(deleteExperience){
                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registro de la experiencia eliminado con exito",
                        data:deleteExperience,
                        error:false,
                    }
                );

                return res.status(200).json(response);
            }else{
                const response= await createResponse(
                    {
                        status:"error",
                        message:"Error al eliminar registro de la experiencia",
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
                message:"Error al eliminar registro de la experiencia",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);
    }

}

module.exports={
    deleteExperienceHandler,
}
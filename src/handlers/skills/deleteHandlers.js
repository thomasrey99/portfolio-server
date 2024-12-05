const { isUUID } = require('validator');
const { createResponse } = require('../../utils/createResponse');
const { deleteSkillController } = require('../../controllers/skills/deleteControllers');

const deleteSkillHandler=async(req, res)=>{
    try {
        const {id}=req.params;
        if(isUUID(id)){
            const deleteSkill=await deleteSkillController(id);
            if(deleteSkill){
                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registro de la habilidad eliminado con exito",
                        data:deleteSkill,
                        error:false,
                    }
                );

                return res.status(200).json(response);
            }else{
                const response= await createResponse(
                    {
                        status:"error",
                        message:"Error al eliminar registro de habilidad",
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
                message:"Error al eliminar registro de habilidad",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);
    }

}

module.exports={
    deleteSkillHandler,
}
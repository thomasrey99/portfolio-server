const { isUUID } = require("validator");
const { createResponse } = require("../../utils/createResponse");
const { patchExperienceController } = require("../../controllers/experience/patchControllers");

const patchExperienceHandler=async(req, res)=>{
    
    try {

        const {id}=req.params;

        const {data}=req.body;

        if(isUUID(id)){
            if(data){
                const updateExperience=await patchExperienceController(id, data);
                if(updateExperience){
                    const response=await createResponse(
                        {
                            status:"success",
                            message:"Registro de experiencia actualizado con exito!",
                            data:updateExperience,
                            error:false,
                        }
                    )
                    return res.status(200).json(response)
                }else{
                    const response=await createResponse(
                        {
                            status:"error",
                            message:"Registro no actualizado",
                            data:updateExperience,
                            error:true,
                        }
                    )
                    return res.status(400).json(response)
                }
            }else{
                const response=await createResponse(
                    {
                        status:"error",
                        message:"Datos no proporcionados",
                        data:null,
                        error:true,
                    }
                )
                return res.status(200).json(response)
            }

        }else{

            const response= await createResponse(
                {
                    status:"error",
                    message:`UUID ${id} no valido`,
                    data:null,
                    error:true,
                }
            );

            return res.status(400).json(response);

        }

    } catch (error) {

        const response= await createResponse(
            {
                status:"error",
                message:"Error al actualizar la experiencia",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);

    }

}

module.exports = {
    patchExperienceHandler
}
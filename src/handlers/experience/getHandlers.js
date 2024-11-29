const { isUUID } = require('validator');
const { getAllExperiencesController, getExperienceByIdController } = require("../../controllers/experience/getControllers")
const { createResponse } = require("../../utils/createResponse")

const getAllExperienceHandler=async(req, res)=>{

    try {

        const experience=await getAllExperiencesController()
        const response=await createResponse(
            {
                status:"success",
                message:"Registros de experiencia obtenidos con exito",
                data:experience,
                error:false,
            }
        )
        
        return res.status(200).json(response)
        
    } catch (error) {

        const response= await createResponse(
            {
                status:"error",
                message:"Error al cargar registro de experiencia",
                data:null,
                error:error.message,
            }
        )
        
        return res.status(400).json(response)
    }

}

const getExperienceByIdHandler=async(req, res)=>{
    
    const {id}=req.params;

    try {
        
        if(isUUID(id)){

            const experience=await getExperienceByIdController(id);
        
            if(experience){
                console.log(experience)
                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registros de la experiencia obtenidos con exito",
                        data:experience,
                        error:false,
                    }
                );

                return res.status(200).json(response);

            }else{

                const response= await createResponse(
                    {
                        status:"error",
                        message:"Error al cargar registro de la experiencia",
                        data:null,
                        error:`Registro con ${id} no encontrado`,
                    }
                );

                return res.status(400).json(response);

            };
        }else{

            const response= await createResponse(
                {
                    status:"error",
                    message:"UUID invalido",
                    data:null,
                    error:`El UUID ${id} no es valido`,
                }
            );

            return res.status(400).json(response);

        }

    } catch (error) {

        const response= await createResponse(
            {
                status:"error",
                message:"Error al cargar registro de la experiencia",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);

    }
};

module.exports = {
    getAllExperienceHandler,
    getExperienceByIdHandler
}
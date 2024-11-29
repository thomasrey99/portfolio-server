const { isUUID } = require('validator');
const { getAllSkillsController, getSkillByIdController } = require("../../controllers/skills/getControllers")
const { createResponse } = require("../../utils/createResponse")

const getAllSkillsHandler=async(req, res)=>{

    try {

        const skills=await getAllSkillsController()
        const response=await createResponse(
            {
                status:"success",
                message:"Registros de habilidades obtenidos con exito",
                data:skills,
                error:false,
            }
        )
        
        return res.status(200).json(response)
    } catch (error) {
        const response= await createResponse(
            {
                status:"error",
                message:"Error al cargar registro de habilidades",
                data:null,
                error:error.message,
            }
        )
        
        return res.status(400).json(response)
    }

}

const getSkillByIdHandler=async(req, res)=>{
    
    const {id}=req.params;

    try {
        
        if(isUUID(id)){

            const skill=await getSkillByIdController(id);
        
            if(skill){

                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registros de habilidad obtenidos con exito",
                        data:skill,
                        error:false,
                    }
                );

                return res.status(200).json(response);

            }else{

                const response= await createResponse(
                    {
                        status:"error",
                        message:"Error al cargar registro de habilidad",
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

        };

    } catch (error) {

        const response= await createResponse(
            {
                status:"error",
                message:"Error al cargar registro de habilidad",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);

    };
};

module.exports = {
    getAllSkillsHandler,
    getSkillByIdHandler
}
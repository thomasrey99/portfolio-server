const { getAllSkillsController } = require("../../controllers/skills/getControllers")
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

module.exports = {
    getAllSkillsHandler
}
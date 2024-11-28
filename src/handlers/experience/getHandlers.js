const { getAllExperiencesController } = require("../../controllers/experience/getControllers")
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

module.exports = {
    getAllExperienceHandler
}
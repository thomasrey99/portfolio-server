const { getAllProjectsController } = require("../../controllers/projects/getControllers")
const { createResponse } = require("../../utils/createResponse")

const getAllProjectsHandler=async(req, res)=>{

    try {

        const projects=await getAllProjectsController()
        const response=await createResponse(
            {
                status:"success",
                message:"Registros de proyectos obtenidos con exito",
                data:projects,
                error:false,
            }
        )
        
        return res.status(200).json(response)
    } catch (error) {
        const response= await createResponse(
            {
                status:"error",
                message:"Error al cargar registro de proyectos",
                data:null,
                error:error.message,
            }
        )
        
        return res.status(400).json(response)
    }

}

module.exports = {
    getAllProjectsHandler
}
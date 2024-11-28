const { getAllCertificationsController } = require("../../controllers/certifications/getControllers")
const { createResponse } = require("../../utils/createResponse")

const getAllCertificationsHandler=async(req, res)=>{

    try {

        const certifications=await getAllCertificationsController()
        const response=await createResponse(
            {
                status:"success",
                message:"Registros de certificaciones obtenidos con exito",
                data:certifications,
                error:false,
            }
        )
        
        return res.status(200).json(response)
    } catch (error) {
        const response= await createResponse(
            {
                status:"error",
                message:"Error al cargar registro de certificaciones",
                data:null,
                error:error.message,
            }
        )
        
        return res.status(400).json(response)
    }

}

module.exports = {
    getAllCertificationsHandler
}
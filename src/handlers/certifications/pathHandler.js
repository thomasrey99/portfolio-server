const { isUUID } = require("validator");
const { pathCertificationController } = require("../../controllers/certifications/pathControllers");
const { createResponse } = require("../../utils/createResponse");

const pathCertificationHandler=async(req, res)=>{
    
    try {

        const {id}=req.params;

        const {data}=req.body;

        if(isUUID(id)){
            if(data){
                const updateCertification=await pathCertificationController(id, data);
                if(updateCertification){
                    const response=await createResponse(
                        {
                            status:"success",
                            message:"Registro de certificacion actualizado con exito!",
                            data:updateCertification,
                            error:false,
                        }
                    )
                    return res.status(200).json(response)
                }else{
                    const response=await createResponse(
                        {
                            status:"error",
                            message:"Registro no actualizado",
                            data:updateCertification,
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
                message:"Error al actualizar la certificacion",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);

    }

}

module.exports = {
    pathCertificationHandler
}
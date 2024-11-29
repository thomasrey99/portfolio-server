const { isUUID } = require('validator');
const { getAllToolsController, getToolByIdController } = require("../../controllers/tools/getControllers");
const { createResponse } = require("../../utils/createResponse");

const getAllToolsHandler=async(req, res)=>{
    try {
        const tools=await getAllToolsController();
        const response=await createResponse(
            {
                status:"success",
                message:"Registros de herramientas obtenidos con exito",
                data:tools,
                error:false
            }
        )
        return res.status(200).json(response);
    } catch (error) {

        const response= await createResponse(
            {
                status:"error",
                message:"Error al cargar registros de herramientas",
                data:null,
                error:error.message,
            }
        )
        
        return res.status(400).json(response)

    }

}

const getToolByIdHandler=async(req, res)=>{
    
    const {id}=req.params;

    try {
        
        if(isUUID(id)){

            const tool=await getToolByIdController(id);
        
            if(tool){

                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registros de la herramienta obtenidos con exito",
                        data:tool,
                        error:false,
                    }
                );

                return res.status(200).json(response);

            }else{

                const response= await createResponse(
                    {
                        status:"error",
                        message:"Error al cargar registro de la herramienta",
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
                message:"Error al cargar registro de la herramienta",
                data:null,
                error:error.message,
            }
        );
        
        return res.status(400).json(response);

    };
    
};

module.exports = {
    getAllToolsHandler,
    getToolByIdHandler
}
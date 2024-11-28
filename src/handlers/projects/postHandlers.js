const { postProjectController } = require("../../controllers/projects/postControllers");
const { createResponse } = require("../../utils/createResponse")

const postProjectsHandler=async(req, res)=>{

    try {

        const {
            name,
            image,
            description,
            url
        }=req.body;

        if(
            name.length!=0
            &&
            image.length!=0
            &&
            description.length!=0
            &&
            url.length!=0
        ){

            const project={
                name,
                image,
                url,
                description
            }

            const createProject=await postProjectController(project);
            
            if(createProject){
                
                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registro de proyecto creado con exito",
                        data:createProject,
                        error:false,
                    }
                )

                return res.status(201).json(response)

            }else{

                const response=await createResponse(

                    {
                        status:"success",
                        message:"El registro ya existe!",
                        data:null,
                        error:false,
                    }

                )
                return res.status(201).json(response)
            }

        }
    } catch (error) {
        const response= await createResponse(
            {
                status:"error",
                message:"Error al crear el registro de proyecto",
                data:null,
                error:error.message,
            }
        )
        
        return res.status(400).json(response)
    }

}

module.exports = {
    postProjectsHandler
}
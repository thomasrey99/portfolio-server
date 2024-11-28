const { postExperienceController } = require("../../controllers/experience/PostControllers");
const { createResponse } = require("../../utils/createResponse")

const postExperienceHandler=async(req, res)=>{

    try {

        const {
            name, 
            image, 
            company, 
            year_start, 
            year_end, 
            description
        }=req.body;

        if(
            name.length!=0
            &&
            image.length!=0
            &&
            company.length!=0
            &&
            description.length!=0
            &&
            year_start
        ){

            const experience={
                name,
                image,
                company,
                year_start,
                year_end:year_end?year_end:null,
                description
            }

            const createExperience=await postExperienceController(experience)
            
            if(createExperience){
                
                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registro de experiencia creado con exito",
                        data:createExperience,
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
                message:"Error al crear el registro",
                data:null,
                error:error.message,
            }
        )
        
        return res.status(400).json(response)
    }

}

module.exports = {
    postExperienceHandler
}
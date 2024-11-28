const { postSkillController } = require("../../controllers/skills/postControllers")
const { createResponse } = require("../../utils/createResponse")

const postSkillHandler=async(req, res)=>{

    try {

        const {name, image}=req.body;

        if(name.length!=0&&image.length!=0){

            const skill={
                name,
                image
            }

            const createSkill=await postSkillController(skill)
            
            if(createSkill){
                
                const response=await createResponse(
                    {
                        status:"success",
                        message:"Registro creado con exito",
                        data:createSkill,
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
    postSkillHandler
}
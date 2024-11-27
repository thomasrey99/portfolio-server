const {Skill}=require("../../db")

const postSkillController=async(data)=>{
    const [skill, created]=await Skill.findOrCreate(
        {
            where:{
                name:data.name
            },
            defaults:data
        }
    )
    if(created){
        return skill.toJSON()
    }else{
        return false
    }
}

module.exports = {
    postSkillController,
}
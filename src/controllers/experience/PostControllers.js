const {Experience}=require("../../db")

const postExperienceController=async(data)=>{

    const [experience, created]=await Experience.findOrCreate(
        {
            where:{
                name:data.name,
                company:data.company,
            },
            defaults:data
        }
    )
    
    if(created){
        return experience.toJSON()
    }else{
        return false
    }
}

module.exports = {
    postExperienceController,
}
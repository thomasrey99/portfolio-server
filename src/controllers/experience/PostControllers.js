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
        console.log()
        return false
    }
}

module.exports = {
    postExperienceController,
}
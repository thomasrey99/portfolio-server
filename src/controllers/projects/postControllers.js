const {Project}=require("../../db")

const postProjectController=async(data)=>{

    const [project, created]=await Project.findOrCreate(
        {
            where:{
                name:data.name,
            },
            defaults:data
        }
    )
    
    if(created){
        return project.toJSON()
    }else{
        return false;
    }
}

module.exports = {
    postProjectController,
}
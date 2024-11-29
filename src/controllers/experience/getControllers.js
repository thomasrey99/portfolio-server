const {Experience}=require("../../db")

const getAllExperiencesController=async ()=>{
    const experiences=await Experience.findAll()
    return experiences;
}

const getExperienceByIdController=async(id)=>{
    try {
        const experience=await Experience.findByPk(id);
        if(experience){
            return experience;
        }else{
            return false;
        };
    } catch (error) {
        console.log(error.message);
        return false;
    }
};

module.exports = {
    getAllExperiencesController,
    getExperienceByIdController
}
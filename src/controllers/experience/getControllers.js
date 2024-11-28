const {Experience}=require("../../db")

const getAllExperiencesController=async ()=>{
    const experiences=await Experience.findAll()
    return experiences;
}

module.exports = {
    getAllExperiencesController
}
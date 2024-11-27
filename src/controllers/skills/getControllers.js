const {Skill}=require("../../db")

const getAllSkillsController=async ()=>{
    const skills=await Skill.findAll()
    return skills;
}

module.exports = {
    getAllSkillsController
}
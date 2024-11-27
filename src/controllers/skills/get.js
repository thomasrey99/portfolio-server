const {Skill}=require("../../db")

const getAllSkills=async ()=>{
    console.log("hola")
    const skills=await Skill.findAll()
    return skills;
}

module.exports = {
    getAllSkills
}
const {Skill}=require("../../db");

const getAllSkillsController=async ()=>{
    const skills=await Skill.findAll();
    return skills;
};

const getSkillByIdController=async(id)=>{
    try {
        const skill=await Skill.findByPk(id);
        if(skill){
            return skill;
        }else{
            return false;
        };
    } catch (error) {
        return false;
    };
};


module.exports = {
    getAllSkillsController,
    getSkillByIdController
}
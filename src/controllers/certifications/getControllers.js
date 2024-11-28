const {Certification}=require("../../db")

const getAllCertificationsController=async ()=>{
    const certifications=await Certification.findAll();
    return certifications;
};

const getCertificationByIdController=async(id)=>{
    const certification=await Certification.findByPk(id);
    if(certification){
        return certification;
    }else{
        return false;
    };
};

module.exports = {
    getAllCertificationsController,
    getCertificationByIdController,
}
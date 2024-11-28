const {Certification}=require("../../db")

const getAllCertificationsController=async ()=>{
    const certifications=await Certification.findAll()
    return certifications;
}

module.exports = {
    getAllCertificationsController
}
const {Certification}=require("../../db");

const postCertificationController=async(data)=>{

    const [certification, created]=await Certification.findOrCreate(
        {
            where:{
                name:data.name,
                institution:data.institution,
            },
            defaults:data
        }
    )
    
    if(created){
        return certification.toJSON()
    }else{
        return false;
    }
}

module.exports = {
    postCertificationController,
}
const {Certification}=require("../../db");

const patchCertificationController = async (id, data) => {

    try {

        const certification = await Certification.findByPk(id);
        if (!certification) {
            return false;
        };
        console.log(certification)
        const updatedCertification = await certification.update(data);
        
        if(updatedCertification){
            return updatedCertification;
        }else{
            
            return false;
            
        }

        

    } catch (error) {

        
        return false;

    };

};

module.exports = {
    patchCertificationController
};
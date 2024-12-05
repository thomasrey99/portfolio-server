const { Certification } = require("../../db");

const deleteCertificationController = async (id) => {
  try {
    const certification = await Certification.findByPk(id);
    console.log(certification);
    if (certification) {
      const deleteCertification = await certification.destroy();
      if (deleteCertification) {
        return certification;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = {
  deleteCertificationController,
};

const { Certification } = require("../../db");

const postCertificationController = async (data) => {
  try {
    const [certification, created] = await Certification.findOrCreate({
      where: {
        name: data.name,
        institution: data.institution,
      },
      defaults: data,
    });
    if (created) {
      return {
        status: 200,
        error: false,
        data: certification,
        message: "Registro de certificacion creado con exito",
      };
    } else {
      return {
        status: 200,
        error: false,
        data: certification ? certification : null,
        message: "Error al crear o el registro ya existe",
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: error.message,
    };
  }
};

module.exports = {
  postCertificationController,
};

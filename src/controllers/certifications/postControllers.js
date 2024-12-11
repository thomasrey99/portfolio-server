const { Certification } = require("../../db");

const postCertificationController = async (data) => {
  const [certification, created] = await Certification.findOrCreate({
    where: {
      name: data.name,
      institution: data.institution,
    },
    defaults: data,
  });
  return created
    ? {
        status: 201,
        error: false,
        data: certification,
        message: "Registro de certificacion creado con exito",
      }
    : {
        status: 409,
        error: true,
        data: certification,
        message: "El registro ya existe"
      };
};

module.exports = {
  postCertificationController,
};

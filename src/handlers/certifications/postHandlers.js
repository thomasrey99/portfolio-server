const {
  postCertificationController,
} = require("../../controllers/certifications/postControllers");
const { createResponse } = require("../../utils/createResponse");

const postCertificationsHandler = async (req, res) => {
  try {
    const { name, image, institution, year, description } = req.body;

    if (
      name &&
      name.length != 0 &&
      image &&
      image.length != 0 &&
      description &&
      description.length != 0 &&
      year &&
      year.length != 0 &&
      institution &&
      institution.length != 0
    ) {
      const certification = {
        name,
        image,
        institution,
        year,
        description,
      };

      const createCertification = await postCertificationController(
        certification
      );

      if (createCertification) {
        const response = await createResponse({
          status: "success",
          message: "Registro de certificacion creado con exito",
          data: createCertification,
          error: false,
        });

        return res.status(201).json(response);
      } else {
        const response = await createResponse({
          status: "success",
          message: "El registro ya existe!",
          data: null,
          error: false,
        });
        return res.status(409).json(response);
      }
    } else {
      const response = await createResponse({
        status: "error",
        message: "Error al crear el registro, se necesitan todos los datos",
        data: null,
        error: "Falta informacion",
      });

      return res.status(400).json(response);
    }
  } catch (error) {
    const response = await createResponse({
      status: "error",
      message: "Error al crear el registro de certificacion",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  postCertificationsHandler,
};

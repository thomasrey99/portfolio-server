const {
  postProjectController,
} = require("../../controllers/projects/postControllers");
const { createResponse } = require("../../utils/createResponse");

const postProjectsHandler = async (req, res) => {
  try {
    const { name, image, description, url } = req.body;

    if (
      name &&
      name.length != 0 &&
      image &&
      image.length != 0 &&
      description &&
      description.length != 0 &&
      url &&
      url.length != 0
    ) {
      const project = {
        name,
        image,
        url,
        description,
      };

      const createProject = await postProjectController(project);

      if (createProject) {
        const response = await createResponse({
          status: "success",
          message: "Registro de proyecto creado con exito",
          data: createProject,
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
      message: "Error al crear el registro de proyecto",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  postProjectsHandler,
};

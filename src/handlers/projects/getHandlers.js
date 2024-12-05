const { isUUID } = require("validator");
const {
  getAllProjectsController,
  getProjectByIdController,
} = require("../../controllers/projects/getControllers");
const { createResponse } = require("../../utils/createResponse");

const getAllProjectsHandler = async (req, res) => {
  try {
    const projects = await getAllProjectsController();
    const response = await createResponse({
      status: "success",
      message: "Registros de proyectos obtenidos con exito",
      data: projects,
      error: false,
    });

    return res.status(200).json(response);
  } catch (error) {
    const response = await createResponse({
      status: "error",
      message: "Error al cargar registro de proyectos",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

const getProjectsByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    if (isUUID(id)) {
      const project = await getProjectByIdController(id);

      if (project) {
        const response = await createResponse({
          status: "success",
          message: "Registros del proyecto obtenidos con exito",
          data: project,
          error: false,
        });

        return res.status(200).json(response);
      } else {
        const response = await createResponse({
          status: "error",
          message: "Error al cargar registro del proyecto",
          data: null,
          error: `Registro con ${id} no encontrado`,
        });

        return res.status(400).json(response);
      }
    } else {
      const response = await createResponse({
        status: "error",
        message: "UUID invalido",
        data: null,
        error: `El UUID ${id} no es valido`,
      });

      return res.status(400).json(response);
    }
  } catch (error) {
    const response = await createResponse({
      status: "error",
      message: "Error al cargar registro del proyecto",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  getAllProjectsHandler,
  getProjectsByIdHandler,
};

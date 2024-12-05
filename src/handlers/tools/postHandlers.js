const {
  postToolController,
} = require("../../controllers/tools/postControllers");
const { createResponse } = require("../../utils/createResponse");

const postToolHandler = async (req, res) => {
  try {
    const { name, image } = req.body;

    if (name && name.length != 0 && image && image.length != 0) {
      const tool = {
        name,
        image,
      };

      const createTool = await postToolController(tool);

      if (createTool) {
        const response = await createResponse({
          status: "success",
          message: "Registro de herramienta creado con exito",
          data: createTool,
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
      message: "Error al crear el registro de la herramienta",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  postToolHandler,
};

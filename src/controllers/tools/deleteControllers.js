const { Tool } = require("../../db");

const deleteToolController = async (id) => {
  try {
    const tool = await Tool.findByPk(id);
    if (tool) {
      const deleteTool = await tool.destroy();
      if (deleteTool) {
        return {
          status: 200,
          error: false,
          data: Tool,
          message: `Registro de la habilidad ${tool.name} eliminado con exito`,
        };
      } else {
        return {
          status: 400,
          error: true,
          data: null,
          message: `Error al eliminar el registro de la habilidad con UUID ${id}`,
        };
      }
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `No se encontro registro de la habilidad con UUID ${id}`,
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: `Error interno del servidor, no se ha podido eliminar el registro con UUID ${id}`,
    };
  }
};

module.exports = {
  deleteToolController,
};

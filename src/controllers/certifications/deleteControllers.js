const { Certification } = require("../../db");

const deleteCertificationController = async (id) => {
  try {
    const certification = await Certification.findByPk(id);
    if (certification) {
      const deleteCertification = await certification.destroy();
      if (deleteCertification) {
        return {
          status: 200,
          error: false,
          data: certification,
          message: `Registro de certificacion ${certification.name} eliminado con exito`,
        };
      } else {
        return {
          status: 400,
          error: true,
          data: null,
          message: `Error al eliminar el registro de certificacion con UUID ${id}`,
        };
      }
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `No se encontro registro de certificacion con UUID ${id}`,
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
  deleteCertificationController,
};

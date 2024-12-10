const { createResponse } = require("../createResponse");

const dataMiddlewareValidator = (schemas, isPost = false) => {
  return (req, res, next) => {
    try {
      const errors = [];

      // Validar los campos según el esquema
      for (const { field, type, required } of schemas) {
        const value = req.body[field];

        // Verificar campos requeridos (solo en POST)
        if (isPost && required && (value === undefined || value === null)) {
          errors.push(`${field} es requerido`);
          continue;
        }

        // Verificar el tipo de dato si el campo existe
        if (value !== undefined && value !== null) {
          const actualType = Array.isArray(value) ? 'array' : typeof value;

          if (actualType !== type) {
            errors.push(
              `${field} debe ser de tipo ${type}, pero se recibió ${actualType}`
            );
          }
        }
      }

      // Si hay errores, responder con código 400
      if (errors.length > 0) {
        const response = createResponse({
          status: "fail",
          message: "Errores en la validación de datos.",
          data: null,
          error: errors,
        });
        return res.status(400).json(response);
      }

      // Continuar al siguiente middleware si no hay errores
      next();
    } catch (error) {
      // Manejar errores internos del servidor
      const response = createResponse({
        status: "fail",
        message: "Error interno del servidor al procesar la data",
        data: null,
        error: error.message,
      });
      return res.status(500).json(response);
    }
  };
};

module.exports = dataMiddlewareValidator;

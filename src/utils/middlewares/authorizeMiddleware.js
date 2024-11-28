require('dotenv').config();

const {KEY}=process.env;

const authorizeMiddleware=(req, res, next)=> {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== KEY) {
    return res.status(403).json({
      status: 'error',
      message: 'Clave de acceso incorrecta',
    });
  }
  next();
};

module.exports = authorizeMiddleware;

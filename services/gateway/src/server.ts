import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

import app from "./index";

const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
  console.log(`🚀 Gateway Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

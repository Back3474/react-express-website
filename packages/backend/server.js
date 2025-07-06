import 'dotenv/config';
import sequelize from './config/database.js';
import app from "./config/app.js";

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', () => {
  sequelize.close()
    .then(() => {
      console.log('DB closed.');
      server.close(() => process.exit());
    })
    .catch((err) => {
      console.error('Error while closing DB:', err.message);
      server.close(() => process.exit(1));
    });
});
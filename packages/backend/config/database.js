import { Sequelize } from 'sequelize';

const dbPath = 'database.sqlite';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false,
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('DB connected successfully.');
  } catch (error) {
    console.error('Connection with DB failed:', error);
    process.exit(1);
  }
}

export async function syncModels(force = false) {
    try {
        await sequelize.sync({ force: force });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Synchronization of models failed:', error);
        process.exit(1);
    }
}

export default sequelize;
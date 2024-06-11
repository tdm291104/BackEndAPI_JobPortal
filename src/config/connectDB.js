import { Sequelize } from 'sequelize';

// Create a Sequelize instance with database connection parameters
const sequelize = new Sequelize('jobtops', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

// Function to establish database connection
const connection = async () => {
  try {
    // Authenticate with the database
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connection;
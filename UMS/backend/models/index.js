const { Sequelize } = require('sequelize');
const UserModel = require('./user');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',       
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432, 
  username: process.env.DB_USER,  
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME,    
  logging: false, 
});

// Initialize the User model
const User = UserModel(sequelize, Sequelize.DataTypes);

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Sync the database (create tables if they don't exist)
sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

// Export the sequelize instance and models
module.exports = { sequelize, User };

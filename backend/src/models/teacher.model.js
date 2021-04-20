
const Sequelize = require("sequelize");

/**
 * 
 * @param {Sequelize.Sequelize} sequelize 
 * @returns {Sequelize.ModelCtor<Sequelize.Model<any, any>>}
 */
module.exports = (sequelize) => {
  const Teacher = sequelize.define("Teachers", {
    teacherId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    middleName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    tenured: {
      type: Sequelize.BOOLEAN
    },
    notes: {
      type: Sequelize.STRING
    },
    finalized: {
      type: Sequelize.BOOLEAN
    }
  });

  return Teacher;
};
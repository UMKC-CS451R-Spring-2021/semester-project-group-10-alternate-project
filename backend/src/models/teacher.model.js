
const Sequelize = require("sequelize");

/**
 * 
 * @param {Sequelize.Sequelize} sequelize 
 * @returns {Sequelize.ModelCtor<Sequelize.Model<any, any>>}
 */
module.exports = (sequelize) => {
  const Teacher = sequelize.define("teacher", {
    firstName: {
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
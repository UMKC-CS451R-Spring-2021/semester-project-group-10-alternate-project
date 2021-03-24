module.exports = (sequelize, Sequelize) => {
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
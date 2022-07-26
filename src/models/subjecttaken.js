const { sequelize } = require('../connect');
const { Sequelize } = require('sequelize');

const SubjectTaken = sequelize.define('subjects_taken', {
        cod_course: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
        },
        cod_plain: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
        },
        rut_person: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
        },
        qualification: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: true,
        },
        approved: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
      }
);

module.exports = SubjectTaken;
const { DataTypes } = require('sequelize');

module.exports=(database)=>{
    database.define(
        "Experience",
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name:{
                type: DataTypes.STRING,
                allowNull:false
            },
            image:{
                type: DataTypes.STRING,
                allowNull:false
            },
            company:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            year_start:{
                type: DataTypes.STRING,
                allowNull:false
            },
            year_end:{
                type: DataTypes.STRING,
                defaultValue: "Actually",
            },
            description:{
                type: DataTypes.TEXT,
                allowNull:true
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            freezeTableName: true,
            timestamps: true,
            paranoid:true,
        }
    )
};
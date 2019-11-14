module.exports = (sequelize, DataTypes) => {
    return sequelize.define('class', {
        class_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        class: {
            type: DataTypes.STRING
        },
    }, { timestamps: false });
}
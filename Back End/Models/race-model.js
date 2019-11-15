module.exports = (sequelize, DataTypes) => {
    return sequelize.define('race', {
        race_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        race: {
            type: DataTypes.STRING,
            notNull: true,
            unique: true
        }
    }, { timestamps: false });
}
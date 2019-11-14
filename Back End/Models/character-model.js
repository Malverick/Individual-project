module.exports = (sequelize, DataTypes) => {
    return sequelize.define('character', {
        character_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        charName: {
            type: DataTypes.STRING,
            notNull: true
        }
    }, { timestamps: false });
}
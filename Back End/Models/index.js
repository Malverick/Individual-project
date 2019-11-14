const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'individual_project',   //Database
    'root',                 //Username
    'password',             //Password
    {
        host: 'localhost',
        dialect: 'mysql'
});

const Class = sequelize.import(__dirname + '/class-model');
const Race = sequelize.import(__dirname + '/race-model');
const Character = sequelize.import(__dirname + '/character-model');

//Many to many tables. 
// Class.associate = (Race) => {
//     Class.belongsToMany(Race.Class, {
//         through: 'ClassRace',
//         foreignKey: 't2_id'
//     });
// };
//Race.belongsToMany(Class, {through: 'ClasssRaces', timestamps: false});

Character.belongsTo(Class);
Class.hasMany(Character);
Character.belongsTo(Race);
Race.hasMany(Character);


sequelize.sync({force: true}).then(() => {
    Class.create({class: 'Wizzard'}),
    Class.create({class: 'Fighter'})
    Class.create({class: 'Cleric'})
});

sequelize.sync({force: true}).then(() => {
    Race.create({race: 'Human'}),
    Race.create({race: 'High Elf'}),
    Race.create({race: 'Dwarf',})
});

module.exports = {
    Class,
    Race,
    Character
};
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

//two sets of one to many
Character.belongsTo(Class);
Class.hasMany(Character);
Character.belongsTo(Race);
Race.hasMany(Character);



sequelize.sync({ force: true }).then(async() => {
    await Class.create({ class: 'Wizzard' });
    await Class.create({ class: 'Fighter' });
    await Class.create({ class: 'Cleric' });
    await Race.create({ race: 'Human' });
    await Race.create({ race: 'High Elf' });
    await Race.create({ race: 'Dwarf' });
    await Character.create({ charName: "Ed", raceRaceId: "2", classClassId: "1" });
    await Character.create({ charName: "Edd", raceRaceId: "1", classClassId: "3" });
    await Character.create({ charName: "Eddy", raceRaceId: "3", classClassId: "2" });
    await Character.create({ charName: "Edward", raceRaceId: "1", classClassId: "1" });
});

module.exports = {
    Class,
    Race,
    Character
};
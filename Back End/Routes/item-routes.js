var express = require("express");
const models = require('../Models')
var router = express.Router();

//Class                                                         Class
router.get('/getThingClass/:id?', async (req, res) => {
    try {
        if (req.params.id == undefined) {
            res.send(await models.Class.findAll())
        }
        else {
            var resp = await models.Class.findAll({
                where: {
                    class_id: req.params.id
                }
            })
            res.send(resp)
        }
    }
    catch (exc) {
        res.status(500).send('Failed to \'get\'');
    }
});
//Race                                                          Race
router.get('/getThingRace/:id?', async (req, res) => {
    try {
        let resp;
        if (req.params.id == undefined) {
            resp = await models.Race.findAll()
        }
        else {
            resp = await models.Race.findAll({
                where: {
                    race_id: req.params.id
                }
            })
        }
        res.send(resp)
    }
    catch {
        res.status(500).send('Failed to \'get\'');
    }
});
//Character                                                     Character
router.get('/getThingChar/:id?', async (req, res) => {

    try {
        if (req.params.id == undefined) {

            res.send(await models.Character.findAll({
                include: [  { model: models.Class },
                            { model: models.Race }]
            }))}
        else {
            var resp = await models.Character.findAll({
                where: {
                    character_id: req.params.id
                },
                include: [  { model: models.Class},
                            { model: models.Race}]
            })
            res.send(resp)
        }}
    catch {
        res.status(500).send('Failed to \'get\'');
    }
});
router.post('/addThingChar/:character/:race/:class', async (req, res) => {
    try {
        await models.Character.create({ charName: req.params.character, raceRaceId: req.params.race, classClassId: req.params.class });
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThingChar/:charName', async (req, res) => {
    try {
        await models.Character.destroy({ where: { charName: req.params.charName } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThingChar/:characterN/:characterO', async (req, res) => {
    try {
        //character: req.body.character << body tag may be wrong]
        await models.Character.update({ charName: req.params.characterN }, { where: { charName: req.params.characterO } });
        res.send('It worked probably')
    }
    catch(err){
       res.status(500).send(err);
    }
});

module.exports = router;
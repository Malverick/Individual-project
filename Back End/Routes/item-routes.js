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
        if (req.params.id == undefined) {
            res.send(await models.Race.findAll())
        }
        else {
            var resp = await models.Race.findAll({
                where: {
                    race_id: req.params.id
                }
            })
            res.send(resp)
        }
    }
    catch {
        res.status(500).send('Failed to \'get\'');
    }
});
//Character                                                     Character
router.get('/getThingChar/:id?', async (req, res) => {
    try {
        if (req.params.id == undefined) {
            res.send(await models.Character.findAll())
        }
        else {
            var resp = await models.Character.findAll({
                where: {
                    character_id: req.params.id
                }
            })
            res.send(resp)
        }
    }
    catch {
        res.status(500).send('Failed to \'get\'');
    }
});
router.post('/addThingChar/:character/:race/:class', async (req, res) => {
    try {
        await models.Character.create({ character: req.params.character, race: req.params.race, class: req.params.class});
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThingChar/:character', async (req, res) => {
    try {
        await models.Character.destroy({ where: { character: req.params.character } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThingChar/:character', (req, res) => {
    try {
        models.Character.update({ character: req.body.character }, { where: { character: req.params.character } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\'');
    }
});

module.exports = router;
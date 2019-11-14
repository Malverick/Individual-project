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
router.post('/addThingClass', async (req, res) => {
    try {
        await models.Class.create({ class: req.body.name});
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThingClass/:name', async (req, res) => {
    try {
        await models.Class.destroy({ where: { class: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThingClass/:name', (req, res) => {
    try {
        models.Class.update({ class: req.body.name }, { where: { class: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\''); T
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
router.post('/addThingRace', async (req, res) => {
    try {
        await models.Race.create({ race: req.body.name});
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThingRace/:name', async (req, res) => {
    try {
        await models.Race.destroy({ where: { race: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThingRace/:name', (req, res) => {
    try {
        models.Race.update({ race: req.body.name }, { where: { race: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\'');
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
router.post('/addThingChar', async (req, res) => {
    try {
        await models.Character.create({ character: req.body.name});
        res.send("probably worked")
    }
    catch{
        res.status(500).send('Failed to \'post\'');
    }
});
router.delete('/deleteThingChar/:name', async (req, res) => {
    try {
        await models.Character.destroy({ where: { character: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'delete\'');
    }
});
router.put('/updateThingChar/:name', (req, res) => {
    try {
        models.Character.update({ character: req.body.name }, { where: { character: req.params.name } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\'');
    }
});

module.exports = router;
const fs = require('fs');

const getCalculator = async (req, res) => {
    try {
        let output = await parseTemplate('calculator_form', '');
        res.send(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('internal server error');
    }
};

const postCalculator = async (req, res) => {

    if (req.body.a === '' || req.body.b === '') {
        return res.status(400).send('bad request');
    }

    let result = '';
    switch (req.body.op) {
        case 'sobiranje':
            result = `${Number(req.body.a) + Number(req.body.b)}`;
            break;
        case 'odzemanje':
            result = `${Number(req.body.a) - Number(req.body.b)}`;
            break;
        case 'delenje':
            result = `${Number(req.body.a) / Number(req.body.b)}`;
            break;
        case 'mnozenje':
            result = `${Number(req.body.a) * Number(req.body.b)}`;
            break;
        default:
            result = `nepoznat operator!`;
    }

    try {
        let output = await parseTemplate('calculator', result);
        res.send(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('internal server error');
    }
};

const parseTemplate = async (template, data) => {
    return new Promise((success, fail) => {
        fs.readFile(`${__dirname}/../views/${template}.html`, 'utf8', (err, content) => {
            if (err) {
                return fail(err);
            }
            content = content.replace('{{data}}', data);
            return success(content);
        });
    });
};

module.exports = {
    getCalculator,
    postCalculator
};
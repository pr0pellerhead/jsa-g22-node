const fs = require('fs');

const dumbFunction = () => {
    try {
        // .....
        // some error happens
        // .....
    } catch(err) {
        throw {error: 'DUMB_FAILED', message: err}; // error rethrow
    }
    // ...
};

const readFile = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                return fail({error: 'FILE_FAILED', message: err});
            };
            return success(data);
        })
    });
};

(async () => {
    try {
        // код кој што сакате да се изврши
        dumbFunction();
        await readFile('pero.txt');
    } catch (error) {
        switch (error.error) {
            case 'DUMB_FAILED':
                console.log('dumb failed...');
                break;
            case 'FILE_FAILED':
                console.log('file failed...');
                break;
            default:
                console.log('something else failed...');
                break;
        }
    }
})();

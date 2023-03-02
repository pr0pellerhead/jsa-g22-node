const http = require('http');

const handler = (req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers['user-agent']);
    // console.log('hello from server');

    // let path = req.url;

    // res.end(`Hello from path: ${path}`);

    // /sobiranje/2/4
    //  / sobiranje / 2 / 4
    // ['', 'sobiranje', '2', '4']

    const [_, op, a, b] = req.url.split('/');
    console.log(op, a, b);

    let o; 

    switch(op) {
        case 'sobiranje':
            o = Number(a) + Number(b);
            res.end(`${o}`);
            break;
        case 'odzemanje':
            o = a - b;
            res.end(`${o}`);
            break;
        case 'delenje':
            o = a / b;
            res.end(`${o}`);
            break;
        case 'mnozenje':
            o = a * b;
            res.end(`${o}`);
            break;
        default:
            res.end('OK');
    }
};

const server = http.createServer(handler);

server.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server successfully started!');
});



/*

/sobiranje/2/5 -> 7
/odzemanje/6/9 -> -3
/mnozenje/3/9 -> 27
/delenje/4/2 -> 2

split ?


*/


// сервис кој ќе обработува рути од следниот тип

// /ime/bojan
// /ime/pero
// /ime/aleksandra
// /ime/jovana
// /ime/stanko
// /ime/ivana
// /ime/goran

// parno: da, karakteri: 5, soglaski: 2, samoglaski: 3
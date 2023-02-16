function mnozenje(a, b) {
    let c = a * b;
    console.log(c);
}

const Mnozenje = (a, b) => console.log(a * b); // FAT-ARROW FUNCTION 

// this

// let a = 10;
// let b = 8;
// let c = a * b;
// console.log(c);
mnozenje(10, 8);
Mnozenje(10, 8);

// a = 7;
// b = 9;
// c = a * b;
// console.log(c);
mnozenje(7, 9);
Mnozenje(7, 9);

// a = 4;
// b = 2;
// c = a * b;
// console.log(c);
mnozenje(4, 2);

// a = 6;
// b = 3;
// c = a * b;
// console.log(c);
mnozenje(6, 3);

// функција 1 прави конверзија од C во F
// функција 2 прави конверзија од F во C

// c2f(12); // *враќа* степени во F
// f2c(100); // *враќа* степени во C

const c2f = (c) => {
    return c * 1.8 + 32;
};

const f2c = (f) => {
    return (f - 32) * 5 / 9;
};


const fun = (parm, c) => {
    let r = parm(c) + 100;
    return r;
};

let res = fun(c2f, 12);


console.log('FUN:', res);

const handler = (e) => {
    console.log(e);
}

// el.addEventListener('click', handler);

// el.addEventListener('click', (e) => {
//     console.log(e);
// });
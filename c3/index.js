// C - create
// R - read
// U - update
// D - delete

const studenti = [
    {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
    {ime: 'Pero', prosek: 8.3, grad: 'Bitola'},
    {ime: 'Janko', prosek: 6.9, grad: 'Bitola'},
    {ime: 'Vesna', prosek: 9.2, grad: 'Skopje'},
    {ime: 'Elena', prosek: 9.9, grad: 'Kumanovo'},
    {ime: 'Vancho', prosek: 10, grad: 'Tetovo'},
    {ime: 'Elena', prosek: 9.9, grad: 'Ohrid'},
    {ime: 'Ivana', prosek: 6.9, grad: 'Kumanovo'},
    {ime: 'Natasha', prosek: 8.1, grad: 'Skopje'},
    {ime: 'Stanko', prosek: 7.2, grad: 'Strumica'}
];

// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.







// forEach, map, reduce, sort, 

// forEach ги изминува сите елементи од низата, не враќа никаков резултат
// studenti.forEach(s => {
//     console.log(s.ime);
// });

// изминува низа за промени на истата, резултатот е нова низа
// const name = studenti.map(s => {
//     return s.ime;
// });
// console.log(name);

// редуцира/намалува/сумира низа на еден единствен резултат
// let ocenki = studenti.reduce((acc, s) => {
//     return acc + s.prosek;
// }, 0);
// console.log(ocenki / studenti.length);

// сортира елементи во низата според дадена функција за сортирање
// studenti.sort((a, b) => {
//     if(a.prosek < b.prosek) return 1;
//     if(a.prosek > b.prosek) return -1;
//     return 0;
// });

// console.log(studenti);

// враќа низа од елементи кои одговараат на поставениот услов
// let studentiFilter = studenti.filter((s) => {
//     // return s.ime === 'Pero';
//     // return s.ime.endsWith('o');
//     // return s.prosek > 8;
//     return s.prosek < 8;
// });

// console.log(studentiFilter);

// враќа елемент од низата кој одговара на поставениот услов
let studentiFind = studenti.find((s) => {
    return s.ime === 'Pero';
});

console.log(studentiFind);
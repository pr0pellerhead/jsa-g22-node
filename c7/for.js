let studenti = [
    {ime: 'Pero', prezime: 'Perovski', prosek: 8.3}, // 0
    {ime: 'Ivan', prezime: 'Ivanovski', prosek: 6.1}, // 1
    {ime: 'Janko', prezime: 'Jankovski', prosek: 9.7}, // 2
];

for(let i = 0; i < studenti.length; i++) {
    // console.log(i);
    console.log(studenti[i].prezime);
}

let bukvi = 'abcde';

for(let y = 0; y < bukvi.length; y++) {
    console.log(bukvi[y]);
}

let niza = ['new york', 'los angeles', 'paris', 'berlin', 'barcelona'];

for(let g = 0; g < niza.length; g++) {
    console.log(niza[g]);
}

for(let s in studenti) { // s е index-от од елементите во низата
    console.log(s);
    console.log(studenti[s]['prezime']);
    console.log(studenti[s].ime, studenti[s].prezime, studenti[s].prosek);
}

for(let o of studenti) { // o е вредноста на елементот од низата
    console.log(o);
}





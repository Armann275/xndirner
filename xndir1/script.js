let matrix = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

let value = 1;

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 5; j++) {
        matrix[i].push(value);
        value++;
    }
}

for (let i = 0; i < matrix.length; i++) {
    let result = '';
    if (i % 2 !== 0){
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            result += matrix[i][j] + ' ';
        }
        
    } else {
        for (let j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j] + ' ';
        }
    }
    console.log(result);
}


// tpuma esi 
// 1 2 3 4 5 
// 10 9 8 7 6 
// 11 12 13 14 15 
// 20 19 18 17 16 
// 21 22 23 24 25 
// 30 29 28 27 26 
// 31 32 33 34 35 
// 40 39 38 37 36 

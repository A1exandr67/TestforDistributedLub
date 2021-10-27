const TRAINS = [
    {
        numberOfTrain: 1,
        startStation: 'Kharkiv',
        endStation: 'Kiev',
        price: 300,
        departureTime: '10.00',
        arriveTime: '18.00'
    },
    {
        numberOfTrain: 5,
        startStation: 'Kharkiv',
        endStation: 'Poltava',
        price: 150,
        departureTime: '08.00',
        arriveTime: '10.00'
    },
    {
        numberOfTrain: 3,
        startStation: 'Kharkiv',
        endStation: 'Sumy',
        price: 600,
        departureTime: '09.00',
        arriveTime: '17.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Kharkiv',
        endStation: 'Lviv',
        price: 800,
        departureTime: '20.00',
        arriveTime: '06.00'
    },
    {
        numberOfTrain: 4,
        startStation: 'Poltava',
        endStation: 'Lviv',
        price: 700,
        departureTime: '12.00',
        arriveTime: '20.00'
    },
    {
        numberOfTrain: 17,
        startStation: 'Poltava',
        endStation: 'Kharkiv',
        price: 150,
        departureTime: '14.00',
        arriveTime: '16.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Poltava',
        endStation: 'Kiev',
        price: 350,
        departureTime: '17.00',
        arriveTime: '21.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Poltava',
        endStation: 'Sumy',
        price: 400,
        departureTime: '13.00',
        arriveTime: '06.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Kiev',
        endStation: 'Kharkiv',
        price: 400,
        departureTime: '14.00',
        arriveTime: '05.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Kiev',
        endStation: 'Poltava',
        price: 200,
        departureTime: '12.00',
        arriveTime: '18.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Kiev',
        endStation: 'Lviv',
        price: 650,
        departureTime: '20.00',
        arriveTime: '22.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Kiev',
        endStation: 'Sumy',
        price: 100,
        departureTime: '20.00',
        arriveTime: '23.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Lviv',
        endStation: 'Sumy',
        price: 500,
        departureTime: '18.00',
        arriveTime: '23.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Lviv',
        endStation: 'Kharkiv',
        price: 700,
        departureTime: '19.00',
        arriveTime: '03.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Lviv',
        endStation: 'Poltava',
        price: 600,
        departureTime: '06.00',
        arriveTime: '17.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Lviv',
        endStation: 'Kiev',
        price: 1000,
        departureTime: '13.00',
        arriveTime: '15.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Sumy',
        endStation: 'Kharkiv',
        price: 500,
        departureTime: '10.00',
        arriveTime: '18.00'
    },
    {
        numberOfTrain: 10,
        startStation: 'Sumy',
        endStation: 'Poltava',
        price: 400,
        departureTime: '21.00',
        arriveTime: '22.00'
    }, {
        numberOfTrain: 10,
        startStation: 'Sumy',
        endStation: 'Kiev',
        price: 100,
        departureTime: '11.00',
        arriveTime: '18.00'
    }, {
        numberOfTrain: 10,
        startStation: 'Sumy',
        endStation: 'Lviv',
        price: 600,
        departureTime: '19.00',
        arriveTime: '23.00'
    },

]
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
function matrixArray(rows, columns) {
    var arr = new Array();
    for (var i = 0; i < rows + 1; i++) {
        arr[i] = new Array();
        for (var j = 0; j < columns; j++) {
            if (i === j) {
                arr[i][j] = 'M';
            } else {
                arr[i][j] = null;
            }
        }
    }
    return arr;
}
function fillArray(arr) {
    for (let i = 0; i < TRAINS.length; i++) {
        let tempStart, tempEnd;
        for (let j = 0; j < UNIQUESTATIONLIST.length; j++) {
            if (TRAINS[i].startStation === UNIQUESTATIONLIST[j]) {
                tempStart = j;
            }
            if (TRAINS[i].endStation === UNIQUESTATIONLIST[j]) {
                tempEnd = j;
            }
        }
        arr[tempStart][tempEnd] = TRAINS[i].price;
    }
    return arr;
}
function fillArrayT(arr){
    for (let i = 0; i < TRAINS.length; i++) {
        let tempStart, tempEnd;
        for (let j = 0; j < UNIQUESTATIONLIST.length; j++) {
            if (TRAINS[i].startStation === UNIQUESTATIONLIST[j]) {
                tempStart = j;
            }
            if (TRAINS[i].endStation === UNIQUESTATIONLIST[j]) {
                tempEnd = j;
            }
        }
        let time1 = TRAINS[i].departureTime;
        let time2 = TRAINS[i].arriveTime;
        if (time2>time1){
            arr[tempStart][tempEnd] = time2 - time1;
        } else if (time1>time2){
            arr[tempStart][tempEnd] = Number("24.00" - time1) + Number(time2);
        }
    }
    return arr;
}
function findArbitraryRoute(arr) {
    let temp = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        temp += arr[0][i];
    }
    return temp;
}
// function firstMatrixReduction(arr, rows) {
//     let tempMin;
//     let tempSum = 0;
//     for (let i = 0; i < rows; i++) {
//         if (i === 0) {
//             tempMin = arr[i][1];
//         }
//         else {
//             tempMin = arr[i][0]
//         }
//         for (let j = 0; j < rows; j++) {
//             if (i === j) {
//                 continue;
//             }
//             if (arr[i][j] < tempMin) {
//                 tempMin = arr[i][j]
//             }
//         }
//         arr[i].push(tempMin);
//         tempSum += tempMin;
//     }

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < rows; j++) {
//             if (i === j) {
//                 continue;
//             }
//             arr[i][j] -= arr[i][rows];
//         }
//     }
//     for (let i = 0; i < rows; i++) {
//         if (i === 0) {
//             tempMin = arr[1][i];
//         }
//         else {
//             tempMin = arr[0][i]
//         }
//         for (let j = 0; j < rows; j++) {
//             if (i === j) {
//                 continue;
//             }
//             if (arr[j][i] < tempMin) {
//                 tempMin = arr[j][i]
//             }

//         }
//         for (let i = 0; i < rows; i++) {
//             for (let j = 0; j < rows; j++) {
//                 if (i === j) {
//                     continue;
//                 }
//                 arr[j][i] -= arr[rows][i];
//             }
//         }
//         arr[rows][i] = tempMin;
//         tempSum += tempMin;
//     }
//     arr[rows].push(tempSum);
//     return (arr);
// }

function matrixReduction(arr, rows){
    let tempMin = Infinity;
    let tempSum = 0;
    let temp = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            if (arr[i][j] !='M' && arr[i][j] !='D') {
            if (arr[i][j] < tempMin) {
                tempMin = arr[i][j];
                temp++;
            }
        }
        }
        if (temp>0){
        arr[i][rows] = tempMin;
        tempSum += tempMin;
        tempMin = Infinity;
        temp = 0;
        }
    }
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                if (arr[i][j] !='M' && arr[i][j] !='D') {
                    arr[i][j] -= arr[i][rows];
                } 
            }
        }
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                if (arr[j][i] !='M' && arr[j][i] !='D') {
                if (arr[j][i] < tempMin) {
                    tempMin = arr[j][i];
                    temp++;
                }
            }
            }
            if (temp>0 && tempMin != Infinity){
            arr[rows][i] = tempMin;
            tempSum += tempMin;
            tempMin = Infinity;
            }
        }
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < rows; j++) {
                    if (arr[j][i] != 'M' && arr[j][i] !='D'){
                    arr[j][i] -= arr[rows][i];
                    }
                }
            }
        arr[rows][rows] = tempSum;
        return (arr);
}
function mainFunk(arr, rows) {
    let temprows = Infinity, tempcols = Infinity, tempsum = 0, index1, index2;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            if (arr[i][j]!='M' && arr[i][j] !='D'){
            if (arr[i][j] === 0) {
                arr[i][j] = Infinity;
                for (x = 0; x < rows; x++) {
                    if (i === x) {
                        continue;
                    }
                    if (arr[i][x] < temprows) {
                        temprows = arr[i][x];
                    }
                }
                for (y = 0; y < rows; y++) {
                    if (y === j) {
                        continue;
                    }
                    if (arr[y][j] < tempcols) {
                        tempcols = arr[y][j];
                    }
                }
                arr[i][j] = 0;
                if ((temprows + tempcols) > tempsum) {
                    tempsum = temprows + tempcols;
                    index1 = i;
                    index2 = j;
                }
                temprows = Infinity;
                tempcols = Infinity;
            }
        }
    }
    }
    arr[index1][index2] = 'M';
    arr[rows][index2]=-1;
    arr[index1][rows]= -1;
    return arr;
}
function decreaseMatrix(arr,rows,index1, index2){
    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= rows; j++) {
            if (i === index1  || j === index2){
                arr[i][j] = 'D';
            }
        }   
    }
    if(arr[index2][index1]!='D')
    arr[index2][index1] = 'M';
    return arr;
}

// function recFunk (arr,copyarr,rows,H,){
//     let path = [];
//     let h1,h2,ind1,ind2,temp=0;
//     arr = mainFunk(arr,rows);
//     for (let i = 0; i < rows; i++) {
//         if (arr[i][rows]===-1){
//             ind1 = i;
//         }
//     }
//     for (let i = 0; i < rows; i++) {
//     if (arr[rows][i]===-1){
//         ind2 = i;
//         }
//     }
//     arr = matrixReduction(arr,rows);
//     h1 = arr[rows][rows]+H;
//     console.log(h1);
//     arr = decreaseMatrix(arr,rows,ind1,ind2);
//     arr = matrixReduction(arr,rows);
//     h2 = H+arr[rows][rows];
//     console.log(h1);
//     console.log(h2);
//     if (h2<=h1){
//         path.push({ind1,ind2});
//         temp++;
//     }
//     else {
//         copyarr[ind1][ind2] = 'M';
//         recfunk(copyarr,copyarr,rows,H);
//     }

//     console.log(arr);
// }

let path = [];
let pathT = [];
let sizeMatrix;
let stationList = [];
for (let i = 0; i < TRAINS.length; i++) {
    stationList.push(TRAINS[i].startStation);
}
const UNIQUESTATIONLIST = stationList.filter(onlyUnique);
console.log(UNIQUESTATIONLIST);
sizeMatrix = UNIQUESTATIONLIST.length;
// let matrix = [
//     ['M',20,18,12,8,0],[5,'M',14,7,11,0],[12,18,'M',6,11,0],
//     [11,17,11,'M',12,0],[5,5,5,5,'M',0],[0,0,0,0,0,0]
// ]
let matrixT = matrixArray(UNIQUESTATIONLIST.length, UNIQUESTATIONLIST.length)
let matrix = matrixArray(UNIQUESTATIONLIST.length, UNIQUESTATIONLIST.length)
matrix = fillArray(matrix);
matrixT = fillArrayT(matrixT);
console.log(matrix);
console.log(matrixT);
const arbitraryRoute = findArbitraryRoute(matrix);
matrix = matrixReduction(matrix, UNIQUESTATIONLIST.length);
matrixT = matrixReduction(matrixT,UNIQUESTATIONLIST.length)
let copyMatrix = JSON.parse(JSON.stringify(matrix));
let copyMatrixT = JSON.parse(JSON.stringify(matrixT));
let bottomLine = matrix[UNIQUESTATIONLIST.length][UNIQUESTATIONLIST.length];
let bottomLineT = matrixT[UNIQUESTATIONLIST.length][UNIQUESTATIONLIST.length];
let h1,h2;
let tempSize;
let temp = false;
let indexBreak = sizeMatrix;
let indexBreakT = sizeMatrix
copyMatrix = mainFunk(copyMatrix,sizeMatrix);
copyMatrixT = mainFunk(copyMatrixT,sizeMatrix);
let H = bottomLine; //+ copyMatrix[sizeMatrix][sizeMatrix];
let HT = bottomLineT;
while (true){
    if (temp){
        matrix = matrixReduction(matrix, UNIQUESTATIONLIST.length);
        temp = false;
    }
    let ind1,ind2;
    matrix = mainFunk(matrix,sizeMatrix);
    for (let i = 0; i < sizeMatrix; i++) {
        if (matrix[i][sizeMatrix]===-1){
            ind1 = i;
        }
    }
    for (let i = 0; i < sizeMatrix; i++) {
    if (matrix[sizeMatrix][i]===-1){
        ind2 = i;
        }
    }
    matrix = matrixReduction(matrix,sizeMatrix);
    let localCopyMatrix = JSON.parse(JSON.stringify(matrix));
    h1 = bottomLine + matrix[sizeMatrix][sizeMatrix];
    matrix = decreaseMatrix(matrix,sizeMatrix,ind1,ind2);
    matrix = matrixReduction(matrix,sizeMatrix);
    h2 = bottomLine+matrix[sizeMatrix][sizeMatrix];
    if (sizeMatrix === indexBreak){
        H = h1;
    }
    if (h2<=h1 && h2<=H){
        path.push({ind1,ind2});
        indexBreak--;
        
        if (indexBreak === 2){
            break;
        }
    } else if (h1<h2 && h2 <=H){
        matrix = localCopyMatrix;
        
    } else {
        matrix = copyMatrix;
        path.length = 0;
        bottomLine = H;
        temp = true;
        indexBreak = sizeMatrix;
        
    }


}
while (true){
    if (temp){
        matrixT = matrixReduction(matrixT, UNIQUESTATIONLIST.length);
        temp = false;
    }
    let ind1,ind2;
    matrixT = mainFunk(matrixT,sizeMatrix);
    for (let i = 0; i < sizeMatrix; i++) {
        if (matrixT[i][sizeMatrix]===-1){
            ind1 = i;
        }
    }
    for (let i = 0; i < sizeMatrix; i++) {
    if (matrixT[sizeMatrix][i]===-1){
        ind2 = i;
        }
    }
    matrixT = matrixReduction(matrixT,sizeMatrix);
    let localCopyMatrix = JSON.parse(JSON.stringify(matrix));
    h1 = bottomLineT + matrixT[sizeMatrix][sizeMatrix];
    matrixT = decreaseMatrix(matrixT,sizeMatrix,ind1,ind2);
    matrixT = matrixReduction(matrixT,sizeMatrix);
    h2 = bottomLineT+matrixT[sizeMatrix][sizeMatrix];
    if (sizeMatrix === indexBreakT){
        HT = h1;
    }
    if (h2<=h1 && h2<=HT){
        pathT.push({ind1,ind2});
        indexBreakT--;
        
        if (indexBreakT === 2){
            break;
        }
    } else if (h1<h2 && h2 <=HT){
        matrixT = localCopyMatrix;
        
    } else {
        matrixT = copyMatrixT;
        pathT.length = 0;
        bottomLineT = H;
        temp = true;
        indexBreakT = sizeMatrix;
        
    }


}
for (let i = 0; i < sizeMatrix; i++) {
    for (let j = 0; j < sizeMatrix; j++) {
        if (matrix[i][j] === 'M'){
            for (let x = 0 ; x < sizeMatrix ; x++){
                if (matrix[i][x] === 0){
                    path.push({ind1: i,ind2: x});
                }
                if (matrix[x][j] === 0){
                    path.push({ind1: x,ind2: j});
                }
            }
        }
        
    }
}
for (let i = 0; i < sizeMatrix; i++) {
    for (let j = 0; j < sizeMatrix; j++) {
        if (matrixT[i][j] === 'M'){
            for (let x = 0 ; x < sizeMatrix ; x++){
                if (matrixT[i][x] === 0){
                    pathT.push({ind1: i,ind2: x});
                }
                if (matrixT[x][j] === 0){
                    pathT.push({ind1: x,ind2: j});
                }
            }
        }
        
    }
}
console.log(matrix);
console.log(path);

    for (let i = 0; i < path.length-1; i++) {
        if (path[i].ind2!=path[i+1].ind1){
            for (let j = i+1; j < path.length; j++) {
                if (path[i].ind2 === path[j].ind1){
                    let temp = path[i+1]
                    path[i+1] = path[j];
                    path[j] = temp;
                    break;
                }
                
            }
        }
        
    }
    for (let i = 0; i < pathT.length-1; i++) {
        if (pathT[i].ind2!=pathT[i+1].ind1){
            for (let j = i+1; j < pathT.length; j++) {
                if (pathT[i].ind2 === pathT[j].ind1){
                    let temp = pathT[i+1]
                    pathT[i+1] = pathT[j];
                    pathT[j] = temp;
                    break;
                }
                
            }
        }
        
    }
console.log('Деньги');
for (let i = 0; i < path.length; i++) {
    console.log(UNIQUESTATIONLIST[path[i].ind1] + ' ' + UNIQUESTATIONLIST[path[i].ind2])  
}
console.log('Время');
for (let i = 0; i < pathT.length; i++) {
    console.log(UNIQUESTATIONLIST[pathT[i].ind1] + ' ' + UNIQUESTATIONLIST[pathT[i].ind2])  
}
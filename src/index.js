// module로 내보내기 때문에 내보내는 상수name이랑 동일하게 맞춘다. 
const exportUsersToExcel = require('./exportService')

// data 담을 컴포넌트 
const users = [
    {
        id : 0,
        name : 'Peter',
        age : 31
    },
    {
        id : 1,
        name : 'John',
        age : 23
    }
];


const workSheetColumnNames = [
    "ID",
    "Name",
    "Age"
];

const workSheetName = 'Users';
const filePath = './outFiles/excel-from-js.xlsx';

exportUsersToExcel(users, workSheetColumnNames, workSheetName, filePath)
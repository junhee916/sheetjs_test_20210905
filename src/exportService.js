const xlsx = require('xlsx')
const path = require('path')

const exportExcel = (data, workSheetColumnNames, workSheetName, filePath) => {

    // xlsx 생성자 만들어짐 
    const workBook = xlsx.utils.book_new();

    // workSheetData 데이터를 확인해보니 전체적인 column에 대한 데이터를 담는 그릇 
    // ... data 부분은 users에 대한 데이터가 들어갈 공간이다. 
    const workSheetData = [
        workSheetColumnNames,
        ... data
    ];

    // 해당되는 페이지에 데이터를 담은 것을 상수화
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);

    /*
    * workBook : 생성자 
    * workSheet : workSheetData를 담은 상수 
    * workSheeName : 어떤 부분을 담는 것인 지 확인해보자 
    */
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);

    // excel 생성될 때 참고해서 만들어지는 것 
    xlsx.writeFile(workBook, path.resolve(filePath))
}

const exportUsersToExcel = (users, workSheetColumnNames, workSheetName, filePath) => {

    const data = users.map(user => {
        return [user.id, user.name, user.age];
    });

    exportExcel(data, workSheetColumnNames, workSheetName, filePath);
}

module.exports = exportUsersToExcel;
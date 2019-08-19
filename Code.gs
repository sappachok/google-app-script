function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getRegister() {
  var SpreadSheetKey = "your_googlesheet_id";
  var sheet = SpreadsheetApp.openById(SpreadSheetKey).getActiveSheet();
  
  var data = sheet.getDataRange().getValues();
  var list = [];
  for (var i = 0; i < data.length; i++) {
    
    list[i] = {
      student_code : data[i][1], // set student code
      student_name : data[i][2], // set student name
      faculty_name : data[i][5], // set faculty
    }
  }
  
  return list;
}
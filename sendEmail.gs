// Prepare and send email
function sendEmail() {
  // FETCH SPREADSHEET //
  var values = SpreadsheetApp.getActiveSheet(); // This accesses all data in the active sheet 
  var row = values.getLastRow(); // This accesses only the last row with data in it 
  
  // EXTRACT VALUES //
  var id = values.getRange(row, 1).getValue(); //Note that column numbering start at 1 instead of at 0
  var fullname = values.getRange(row, 3).getValue(); //Note that column numbering start at 1 instead of at 0
  var email = values.getRange(row, 4).getValue();
  
  // PREPARE EMAIL //
  
  // Email recipient
  var emailRecipients = "zokzek@gmail.com";
  
  // Email subject
  var emailSubject = "Test Google Form Response";
  
  // Email body
  var emailBody = "<h2>Results of Submission</h2>" +
    "<strong>Last Row:</strong> " + row + "<br />" +
    "<strong>Your ID:</strong> " + id + "<br />" +
    "<strong>Your name:</strong> " + fullname + "<br />" +
    "<strong>Email:</strong> " + email;
  
  // SEND EMAIL TO ADMIN //
  MailApp.sendEmail({
    to: emailRecipients,
    subject: emailSubject,
    htmlBody: emailBody
  });
    
  // SEND EMAIL TO FORM SUBMITTER //
  
  // Submitter email details
  submitterEmailSubject = "Thank you for submitting the Test Form";
  submitterEmailBody = "<h2>Results of Submission</h2>" +
    "<strong>Your ID:</strong> " + id + "<br />" +
    "<strong>Your name:</strong> " + fullname + "<br />" +
    "<strong>Email:</strong> " + email;
  
  MailApp.sendEmail({
    to: email,
    replyTo: 'zokzek@gmail.com',
    subject: submitterEmailSubject,
    htmlBody: submitterEmailBody
  });
  
}
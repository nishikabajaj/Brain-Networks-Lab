// 
// In google docs:
// 0. Open the file you want to add this functionality
// 1. Go to Extensions -> AppScript
// 2. Copy and paste this file into Code.gs
// 3. Click on [|> Run]
// 4. Go back to your doc.
// 5. You will see a new "Custom" pull down menu.
// 6. The rest is self-explanatory.
// 7. config: you can change the time zone below. It is set to CDT.
//
// App script to simply paste a time stamp at the current cursor location
// - Also allows you to "Go to the end of the documnet" 
// - US central time is assumed: change 
// Yoonsuck Choe
// choe@tamu.edu
// 08/15/2022 

//-------------
// CONFIG : time zone
//-------------
var timezone = "GMT+7";  // change this to match your time zone

//-------------
// Add Menu when Document is launched
//-------------
function onOpen() {
  var ui = DocumentApp.getUi();
  
  // set persistent data
  PropertiesService.getScriptProperties().setProperty('tz', timezone);

  ui.createMenu('Custom')
      .addItem('Time stamp', 'timeStamp')
      .addItem('Goto End','gotoEnd')
      .addItem('Time stamp at the End','timestampEnd')
      // .addItem('Set Timezone','setTimezone')   : not very useful, so removing, for now. 
      .addToUi();
}

//-------------
// Go to the end of the document
//-------------
function gotoEnd() {

  // source:  https://stackoverflow.com/questions/55920739/move-to-last-line-of-google-document-when-it-is-opened

  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var numChildren = body.getNumChildren();
  var pos = doc.newPosition(body.getChild(numChildren - 1),0);
  doc.setCursor(pos);

}

//-------------
// Timestamp at current cursor location (no error checks!)
//-------------
function timeStamp() {

  // get document
  var body = DocumentApp.getActiveDocument().getBody();

  // get current cursor location
  var cursor = DocumentApp.getActiveDocument().getCursor();

  var tz = PropertiesService.getScriptProperties().getProperty('tz');

  if (cursor) {
    var date = Utilities.formatDate(new Date(), tz, "MM/dd/yyyy hh:mm:ss")
    var str = date + " " + tz
    cursor.insertText(str);
    
  } 

  // move cursor to the end of the time stamp string
  const doc = DocumentApp.getActiveDocument();
  doc.setCursor(doc.newPosition(cursor.getElement(), cursor.getOffset() + 1));
}


//-------------
// Time stamp at the end
//-------------
function timestampEnd() {
  gotoEnd()
  timeStamp()
}

//-------------
// Set timezone (no error check)
//-------------
function setTimezone() {
  //
  // do nothing yet
  var ui = DocumentApp.getUi();
  var tz = ui.prompt("Enter Timezone (e.g. GMT+6)"); 
  PropertiesService.getScriptProperties().setProperty('tz', tz.getResponseText());

}


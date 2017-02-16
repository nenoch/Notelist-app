
function testNoteControllerPrintsHTMLtoDocument() {
  var text = "Great news!";
  var notelist = new NoteList();
  notelist.addNote(text);
  var noteview = new NoteView(notelist);
  var notecontroller = new NoteController(noteview, document);
  notecontroller.printNotesHTML();
  assert.isTrue(document.innerHTML === "<ul><li><a href='#notes/0'><div>Great news!...</div></a></li></ul>");
};

function testNoteControllerPrintsSingleNote() {
  var text = "Great news! GreatNews displays full pages of news articles across rss feeds, optimized for fast reading. So you can skim through pages in seconds, and pick interesting ones to dig in.";
  var notelist = new NoteList();
  notelist.addNote(text);
  var noteview = new NoteView(notelist);
  var notecontroller = new NoteController(noteview, document);
  document.getElementById('app').click();
  assert.isTrue(document.getElementById('note').innerHTML === "<div>Great news! GreatNews displays full pages of news articles across rss feeds, optimized for fast reading. So you can skim through pages in seconds, and pick interesting ones to dig in.</div>");
};

testNoteControllerPrintsHTMLtoDocument();
testNoteControllerPrintsSingleNote();

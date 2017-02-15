// function testNoteControllerMakesInstanceOfNoteView() {
//   var notelist = new NoteList();
//   var notecontroller = new NoteController(notelist);
//   assert.isTrue(notecontroller._noteview instanceof NoteView);
// };
//
// testNoteControllerMakesInstanceOfNoteView()

function testNoteControllerPrintsHTMLtoDocument() {
  var text = "Great news!";
  var notelist = new NoteList();
  notelist.addNote(text);
  var noteview = new NoteView(notelist);
  var noteviewOutput = noteview.displayNotes();
  var fakeDoc = document.createElement('div')
  var notecontroller = new NoteController(noteviewOutput, fakeDoc);
  notecontroller.changeHTML();
  assert.isTrue(fakeDoc.innerHTML === "<ul><li><div>Great news!</div></li></ul>");
};

// testNoteControllerMakesInstanceOfNoteView();
testNoteControllerPrintsHTMLtoDocument();

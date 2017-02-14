function testNoteViewtMakesInstanceOfNoteView() {
  var notelist = new NoteList();
  var noteview = new NoteView(notelist);
  assert.isTrue(noteview instanceof NoteView);
};


function testNoteViewReturnFormattedList() {
  var notelist = new NoteList();
  notelist.addNote("note1");
  notelist.addNote("note2");
  var noteview = new NoteView(notelist);
  var htmlString = "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>"
  assert.isTrue(noteview.displayNotes() === htmlString);
};

testNoteViewtMakesInstanceOfNoteView();
testNoteViewReturnFormattedList();

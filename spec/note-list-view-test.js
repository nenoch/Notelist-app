function testNoteViewtMakesInstanceOfNoteView() {
  var notelist = new NoteList();
  var noteview = new NoteView(notelist);
  assert.isTrue(noteview instanceof NoteView);
};


function testNoteViewReturnFormattedList() {
  var note1 = 'Text1';
  var note2 = 'Text2';
  var notelist = new NoteList();

  notelist.addNote(note1);
  notelist.addNote(note2);
  console.log(notelist.getNoteList());

  var noteview = new NoteView(notelist);
  var htmlString = "<ul><li><div>Text1</div></li><li><div>Text2</div></li></ul>"
  console.log(noteview.displayNotes());
  assert.isTrue(noteview.displayNotes() === htmlString);
};

testNoteViewtMakesInstanceOfNoteView();
testNoteViewReturnFormattedList();

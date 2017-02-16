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
  var htmlString = "<ul><li><a href='#notes/0'><div>note1...</div></a></li><li><a href='#notes/1'><div>note2...</div></a></li></ul>"
  assert.isTrue(noteview.displayNotes() === htmlString);
};

testNoteViewtMakesInstanceOfNoteView();
testNoteViewReturnFormattedList();

function testNoteViewFirst20Characters(){
  var notelist = new NoteList();
  notelist.addNote("We are adding a note this part is past 20");
  var noteview = new NoteView(notelist);
  var htmlString = "<ul><li><a href='#notes/0'><div>We are adding a note...</div></a></li></ul>"
  assert.isTrue(noteview.displayNotes() === htmlString);
}

testNoteViewFirst20Characters()

function testNoteViewSingleNoteOwnURL(){
  var notelist = new NoteList();
  notelist.addNote("We are adding a note this part is past 20");
  var noteview = new NoteView(notelist);
  assert.isTrue(noteview.displayNotes() === "<ul><li><a href='#notes/0'><div>We are adding a note...</div></a></li></ul>");
}

testNoteViewSingleNoteOwnURL()

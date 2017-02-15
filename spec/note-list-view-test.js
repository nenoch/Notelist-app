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

function testNoteViewFirst20Characters(){
  var notelist = new NoteList();
  notelist.addNote("We are adding a note this part is past 20");
  var noteview = new NoteView(notelist);
  var htmlString = "<ul><li><div>We are adding a note</div></li></ul>"
  assert.isTrue(noteview.displayNotes()===htmlString);
}

testNoteViewFirst20Characters()

function testNoteViewSingleNoteOnOwnURL(){
  var notelist = new NoteList();
  notelist.addNote("We are adding a note this part is past 20");
  notelist.addNote("We are having a note this part is past 20");
  notelist.addNote("We are seeing a note this part is past 20");
  var noteview = new NoteView(notelist);
  window.location.href = "http://localhost:8080#notes/1"
  var el = document.getElementById('note')
  assert.isTrue(el.innerHTML === "<div>We are having a note this part is past 20</div>");
}

testNoteViewSingleNoteOnOwnURL()

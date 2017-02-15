
var notelist = new NoteList()
notelist.addNote("Favourite drink: seltzer")
var noteview = new NoteView(notelist);
var noteviewOutput = noteview.displayNotes();
var Doc = document.getElementById('app');
var notecontroller = new NoteController(noteviewOutput, Doc);
notecontroller.changeHTML();

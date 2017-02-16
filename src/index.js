
var notelist = new NoteList()
notelist.addNote("Favourite drink: seltzer")
notelist.addNote("Favourite food: pizza")
notelist.addNote("Favourite place: London")
var noteview = new NoteView(notelist);
var noteviewOutput = noteview.displayNotes();
var Doc = document.getElementById('app');
var notecontroller = new NoteController(noteviewOutput, Doc);
notecontroller.changeHTML();

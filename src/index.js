
var notelist = new NoteList()
notelist.addNote("Favourite drink: seltzer")
notelist.addNote("Favourite food: pizza")
notelist.addNote("Favourite place: London")
var noteview = new NoteView(notelist);
var Doc = document.getElementById('app');
var notecontroller = new NoteController(noteview, Doc);
notecontroller.printNotesHTML();
console.log(notecontroller.getNoteFromUrl(window.location));
notecontroller.makeURLShowSingleNoteForCurrentPage();

"use strict";


(function(exports){

  function NoteController(noteview){
    this._noteview = noteview;
    this.notelist = this._noteview._notelist
    // this._element = element;
  }

  NoteController.prototype.printNotesHTML = function(){
    document.getElementById('app').innerHTML = this._noteview.displayNotes();
  }

  NoteController.prototype.makeURLShowSingleNoteForCurrentPage = function() {
    window.addEventListener("hashchange", showSingleNoteForCurrentPage);
  }

  function showSingleNoteForCurrentPage() {
    showNote(getNoteFromUrl(location.hash));
  }

  function getNoteFromUrl(location) {
    return parseInt(location.split("#notes/")[1]);
  }

  function showNote(id) {
    var htmlstring = new SingleNoteView(notelist._notes[id]).singleHTML();
    document.getElementById("note").innerHTML = htmlstring;
  }

  exports.NoteController = NoteController


})(this);

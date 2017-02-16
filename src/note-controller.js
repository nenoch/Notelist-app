"use strict";


(function(exports){

  function NoteController(noteview, element){
    this._noteview = noteview;
    this._element = element;
  }

  NoteController.prototype.printNotesHTML = function(){
    this._element.innerHTML = this._noteview.displayNotes();
  }

  function makeURLShowSingleNoteForCurrentPage() {
    window.addEventListener("hashchange", showSingleNoteForCurrentPage);
  }

  function showSingleNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
  }

  NoteController.prototype.showNote = function() {
    This._element.getElementById("note")
    var singlenote = new SingleNoteView(this._noteview._notelist[0]);
    document.innerHTML = singlenote.singleHTML();
  }

  exports.NoteController = NoteController


})(this);

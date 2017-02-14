"use strict";

(function(exports) {

  var notes = [];

  function NoteList() {
  };

  NoteList.prototype.getNoteList = function () {
    return notes;
  }

  NoteList.prototype.addNote = function (text) {
    var note = new Note(text);
    return notes.push(note);
  }

exports.NoteList = NoteList;

})(this);

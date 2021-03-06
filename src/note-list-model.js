"use strict";

(function(exports) {

  // var notes = [];

  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.getNoteList = function () {
    return this._notes;
  }

  NoteList.prototype.addNote = function (text) {
    var note = new Note(text);
    return this._notes.push(note);
  }

exports.NoteList = NoteList;

})(this);

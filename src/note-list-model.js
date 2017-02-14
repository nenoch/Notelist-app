"use strict";

(function(exports) {

  var notelist = [];


  function NoteList() {
      };

  NoteList.prototype.getNoteList = function () {
    return notelist;
  }

  NoteList.prototype.addNote = function (text) {
    var note = new Note(text);
    return notelist.push(note);
  }

exports.NoteList = NoteList;

})(this);

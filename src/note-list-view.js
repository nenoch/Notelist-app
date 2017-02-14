"use strict";

(function(exports) {

  var notelist = [];

  function NoteView(notelistObj) {
   notelist = notelistObj.getNoteList();
  };

  NoteView.prototype.displayNotes = function () {
    var string = "";
      for (var i = 0; i < notelist.length; i++) {
      string += "<li><div>" + notelist[i].getText() + "</div></li>"
    }

    return "<ul>" + string + "</ul>";
  }

exports.NoteView = NoteView;

})(this);

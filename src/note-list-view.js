"use strict";

(function(exports) {

  // var notelist = [];

  function NoteView(notelistObj) {
    this._notelist = notelistObj.getNoteList();
  };

  NoteView.prototype.displayNotes = function () {
    var string = ""
      for (var i = 0; i < this._notelist.length; i++) {
      string += "<li><div>" + this._notelist[i].getText().substr(0,20) + "</div></li>"
    }
    return "<ul>" + string + "</ul>";
  }

  NoteView.prototype.displayHref = function () {
      var competeHref = "";
      for (var i = 0; i < this._notelist.length; i++) {
      completeHref += "<a href='#notes/" + i + "'>Note" + i +"</a>"
    }
    return completeHref;
  }

exports.NoteView = NoteView;
})(this);

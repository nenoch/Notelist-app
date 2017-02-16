"use strict";

(function(exports) {

  function NoteView(notelist) {
    this._notelist = notelist.getNoteList();
  };

  NoteView.prototype.displayNotes = function () {
    var string = ""
      for (var i = 0; i < this._notelist.length; i++) {
      string += "<li><a href='#notes/" + i + "'><div>" + this._notelist[i].getText().substr(0,20) + "...</div></a></li>"
    }
    return "<ul>" + string + "</ul>";
  }

  // NoteView.prototype.displayHref = function () {
  //     var noteHash = "";
  //     for (var i = 0; i < this._notelist.length; i++) {
  //     noteHash += "<a href='#notes/" + i + "'>Note" + i +"</a>"
  //   }
  //   return completeHref;
  // }

exports.NoteView = NoteView;
})(this);

"use strict";

(function(exports) {

  // var text = "";

  function Note(string) {
    this.text = string;
  };

  Note.prototype.getText = function () {
    return this.text;
  }

exports.Note = Note;

})(this);

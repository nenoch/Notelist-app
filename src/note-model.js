"use strict";

(function(exports) {

  function Note(string) {
    this._text = string;
  };

  Note.prototype.getText = function () {
    return this._text;
  }

exports.Note = Note;

})(this);

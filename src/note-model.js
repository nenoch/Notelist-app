"use strict";

(function(exports) {

  var count = 0;

  function Note(string) {
    this.text = string;
    this.id = count;
    count ++;
  };

  Note.prototype.getText = function () {
    return this.text;
  }

exports.Note = Note;

})(this);

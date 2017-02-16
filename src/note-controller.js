"use strict";


(function(exports){

  function NoteController(noteviewOutput, element){
    this._noteview = noteviewOutput;
    this._element = element;
  }

  NoteController.prototype.changeHTML=function(){
    this._element.innerHTML = this._noteview;
  }

  exports.NoteController = NoteController


})(this);

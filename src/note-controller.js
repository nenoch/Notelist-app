"use strict";


(function(exports){

  function NoteController(noteview, element){
    this._noteview = noteview;
    this._element = element;
  }

  // function getAppElement(){
  //   return document.getElementById('app');
  // }


  NoteController.prototype.changeHTML=function(){
    this._element.innerHTML = this._noteview;
  }

  exports.NoteController = NoteController


})(this);

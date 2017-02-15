"use strict";


(function(exports){

  function NoteController(notelist){
      this._noteview = new NoteView(notelist)
  }

  function getAppElement(){
    return document.getElementById('app');
  }


  NoteController.prototype.changeHTML=function(){
    var elem = getAppElement()
    var noteviewHTML = this._noteview.displayNotes()
    elem.innerHTML = noteviewHTML
  }

  exports.NoteController = NoteController


})(this);

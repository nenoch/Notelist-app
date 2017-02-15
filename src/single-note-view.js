"use strict";


(function(exports){

  function SingleNoteView(note){
      this._note = note;
  }

  SingleNoteView.prototype.singleHTML=function(){
    var string = "<div>"+this._note.getText()+"</div>"
    return string
  }


  exports.SingleNoteView = SingleNoteView
})(this);

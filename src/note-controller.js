"use strict";


(function(exports){
  function getHTML(){
    var getter = document.getElementById('app');
    return getter
  }

  function changeHTML(){
    var elem = getHTML()
    elem.innerHTML = "Howdy"
  }

  exports.getHTML = getHTML
  exports.changeHTML = changeHTML


})(this);

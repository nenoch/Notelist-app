function singleNoteViewInitialized(){
  var note = new Note()
  var singlenoteview = new SingleNoteView(note)
  assert.isTrue(singlenoteview instanceof SingleNoteView)
}

singleNoteViewInitialized()

function singleNoteViewReturnsFormattedNote(){
  var note = new Note("Hello")
  var singlenoteview = new SingleNoteView(note)
  assert.isTrue(singlenoteview.singleHTML() === "<div>Hello</div>")
}

singleNoteViewReturnsFormattedNote()

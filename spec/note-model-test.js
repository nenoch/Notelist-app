function testNoteMakesInstanceOfNote() {
  var note = new Note('text');
  assert.isTrue(note instanceof Note);
};

testNoteMakesInstanceOfNote();

function testNoteCanHoldText() {
  var note = new Note('text');
  assert.isTrue(note.getText() === 'text');
};

testNoteCanHoldText();

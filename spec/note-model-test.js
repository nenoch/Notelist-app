function testNoteMakesInstanceOfNote() {
  var note = new Note();
  assert.isTrue(note instanceof Note());
};

testNoteMakesInstanceOfNote();

function testNoteCanHoldText() {
  var note = new Note('text');
  assert.isTrue(note.text === 'text');
};

testNoteCanHoldText();

function testNoteCanHoldText() {
  var note1 = new Note('text');
  var note2 = new Note('text');
  assert.isTrue(note1.id === 0);
  assert.isTrue(note2.id === 1);

};

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

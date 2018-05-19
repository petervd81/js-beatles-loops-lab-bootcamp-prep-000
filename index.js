function theBeatlesPlay(musicians, instruments) {
  var plays = new Array;
  for (var i = 0; i < (musicians.length - 1); i++) {
    plays.push(`${musicians[i]} plays ${instrument[i]}`);
  }
  return plays;
}
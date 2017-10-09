function theBeatlesPlay(musicians, instruments) {
  var MusiciansInstruments =[];
  for (var i=0; i < musicians.length; i++ ){
    MusiciansInstruments[i] = musicians[i] + " plays " + instruments[i]
  }
  return MusiciansInstruments
}

function johnLennonFacts(facts) {
  var loudarray =[];
  var n = 0;
  while(n < facts.length){
    loudarray[n] = facts[n] + "!!!"
    n++
  }
  return loudarray
}

function iLoveTheBeatles(number) {
  var beatArray =[];
  var i=0;
  do {
    beatArray[i] = "I love the Beatles!";
    i = i++
    number = number + i
  } while(number < 15);
  return beatArray
}

var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var i = 0
  for(i; i < katzDeliLine; ++i){
    if(katzDeliLine[i] === name){
      return i + 1
    }
  }
  return i
}

function nowServing(){
  var temp = ""
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    temp = katzDeliLine.unShift()
    return temp
  }
}

function currentLine(){
  
}

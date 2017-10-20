var katzDeli = [];

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

function currentLine(katzDeliLine){
  var i = 0
  var size = katzDeliLine.length
  var ans = "The line is currently: "

  if(size == 0){
    return "The Line is currently empty"
  }
  for(i;i < size; ++i){
    if(i == size - 1){
      ans = ans + `${i}. ${katzDeliLine[i]}`
    }else{
      ans = ans + `${i}. ${katzDeliLine[i]}, `
    }
  }
  return ans
}

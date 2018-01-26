

function mean(){
  var totalMean = 0;
  var i;
  var fraction;
  var num;
  var den;
  var counter = 0;
  for(i = 1; i < 5; i++)
  {
    num = Number(document.getElementById("myMark"+i).value);
    den = Number(document.getElementById("totalMark"+i).value);
    //sets the HTML text to Number
    if(num >= 0 && den > 0){
      counter++;
      totalMean = totalMean + num / den;
    }
  }
  if(totalMean >= 0 && totalMean <= 100){ //check if number
    totalMean = totalMean / counter;
      document.getElementById("total").innerHTML = totalMean.toFixed(3);
      fraction = totalMean*100;
      document.getElementById('fraction').innerHTML = fraction.toFixed(3) + "/100";
      return 1;
  }
  else{
    document.getElementById("total").innerHTML = "INVALID INPUT";
    return -1;
  }
}


function weighted(){
  var totalWeight = 0;
  var totalPer = 0;
  var i;
  var currMean;
  var num;
  var den;
  var percent;
  var fraction;
  for(i = 1; i < 5; i++)
  {
    num = Number(document.getElementById("myMark"+i).value);
    den = Number(document.getElementById("totalMark"+i).value);
    percent = Number(document.getElementById("percent"+i).value);
    if(num >= 0 && den > 0 && percent > 0)
    {
      totalPer = totalPer + percent;
      currMean = num / den;
      totalWeight = totalWeight + currMean * percent;
    }
  }
  //makes sure totalpercent equals to 100
  if(totalPer <= 100)
  {
    if(totalPer == 0)
    {
      document.getElementById('wTotal').innerHTML = "0";
    }
    totalWeight = totalWeight / totalPer;
    document.getElementById('wTotal').innerHTML = totalWeight.toFixed(3);
    fraction = totalWeight*100
    document.getElementById('wFraction').innerHTML = fraction.toFixed(3) + "/100";
    return 1;
  }
  //error if not
  else{
    document.getElementById("wTotal").innerHTML = "INVALID INPUT";
    return -1;
  }
}

//Extra Portion
function liveUpdate(line){ //LIVE UPDATES THE MEAN FOR EACH
  var curr;
  var num = Number(document.getElementById("myMark"+line).value); //numerator
  var den = Number(document.getElementById("totalMark"+line).value);//denominator
  if(den > 0)
  {
    curr = num / den;
    document.getElementById("avg"+line).innerHTML = curr.toFixed(3);
  }
  else{
    document.getElementById("avg"+line).innerHTML = "0";
  }
}

function perUpdater(){ //UPDATES THE PERCENT EVERYTIME
  var totalP = 0;
  var i;
  var curr;
  for(i = 1; i < 5; i++){
    curr = Number(document.getElementById("percent"+i).value);
    if(curr >= 0 && curr <= 100)
    {
      totalP = totalP + curr;
    }
  }
  document.getElementById("percentT").innerHTML = totalP;
}

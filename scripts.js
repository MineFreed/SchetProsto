var Zadacha = /** @class */ (function () {
    function Zadacha(fFirst, fSecond, fOperator, fAnswer, fType) {
        this.First = fFirst;
        this.Second = fSecond;
        this.Operator = fOperator;
        this.Answer = fAnswer;
        this.Type = fType;
    }
    return Zadacha;
}());

var myZadacha;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function Start() {
    let difficult = 0;
    const answers = document.querySelectorAll('input[name="question"]');
    for (const f of answers) {
      if (f.checked) {
        difficult = f.value;
      }
    }
    let answer = 0;
    let operator = getRandomInt(2);
    let first = getRandomInt(1+difficult);
    let second = getRandomInt(1+difficult);
    let type = getRandomInt(3);
    if (type == 0 || type == 1){
      type += 2;
    }
    if (operator == 0){
      answer = first + second;
    } else {
      answer = first - second;
    }
    myZadacha = new Zadacha(first,second,operator,answer,type);
    console.log(myZadacha.First);
    console.log(myZadacha.Second);
    console.log(myZadacha.Operator);
    console.log(myZadacha.Answer);
    console.log(myZadacha.Type);
    toHTML(myZadacha)
}

function toHTML(zadacha){
  let pole = document.getElementById("primer");
  let poleBase = document.getElementById("base")
    var first1 = zadacha.First;
    var second1 = zadacha.Second;
    var first1type = first1.toString(zadacha.Type);
    var second1type = second1.toString(zadacha.Type);
    var base1 = zadacha.Type;
    
    console.log(first1type);
    console.log(second1type);
  if (zadacha.Operator == 0){
    pole.textContent = first1type +  "+" + second1type;
    
  } else {
    pole.textContent = first1type + "-" + second1type;
  }
  poleBase.textContent = base1;
}

function checkAnswer(){
  let otvet = document.getElementById("otvet");
  let prav = document.getElementById("prav");
  let neprav = document.getElementById("neprav");
  if (otvet.value == myZadacha.Answer.toString(myZadacha.Type)){
    prav.textContent =  Number(prav.textContent) + 1
  } else {
    neprav.textContent =  Number(neprav.textContent) + 1
  }
  otvet.value = '';
  Start();
}

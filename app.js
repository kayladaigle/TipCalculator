var billValue = "";
var totalPeople = "";
var percentValue = "";


// billValue is the variable where the bill total is stored

 var billTotal = document.getElementsByClassName('dollarInput')[0];
 billTotal.addEventListener("input", function(event) {

  billValue = event.target.value;
      //console.log('total bill value = ' + billValue);
 });

// totalPeople is the variable where total number of people is stored

 var numOfPeople = document.getElementsByClassName('peopleInput')[0];
 numOfPeople.addEventListener("input", function(event) {

     totalPeople = event.target.value;
     //console.log('total people = ' + totalPeople);

  });

//percentValue is the variable where the selcted button value is stored

 var percentButton = document.getElementsByClassName("percentButton");

 for (var i = 0; i < percentButton.length; i++){
   percentButton[i].addEventListener("click", function(){
     for(var j=0; j < percentButton.length;j++) {
       percentButton[j].classList.remove("selected");
     }

     this.classList.add("selected");

     percentValue = this.getAttribute("data-value");

   });
 }

function calculateTotal(){
  let billValueNum = parseFloat(billValue);
  let percentValueNum = parseFloat(percentValue);
  let totalPeopleNum = parseFloat(totalPeople);

  let tipAmount = (billValueNum * percentValueNum) / totalPeopleNum;
  let totalAmount =  (billValueNum + tipAmount) / totalPeopleNum;

  let tipDisplay = document.getElementsByClassName("tipDisplay");
  let totalDisplay = document.getElementsByClassName("totalDisplay");

  for (let i = 0; i < tipDisplay.length; i++) {
      tipDisplay[i].innerHTML = tipAmount.toFixed(2);
    }

    for (let i = 0; i < totalDisplay.length; i++) {
      totalDisplay[i].innerHTML = totalAmount.toFixed(2);
    }
};

document.addEventListener('keydown', calculateTotal);
 //tip calculations

var resetButton = document.querySelector('.reset');

resetButton.addEventListener('click',function(){
  location.reload();
});
// total calculations

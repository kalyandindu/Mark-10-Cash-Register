const billAmount = document.querySelector("#bill-made");
const cashGiven = document.querySelector("#given-cash");
const findChange = document.querySelector("#btn-click");
const msg = document.querySelector("#err-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 20, 10, 5, 1];

findChange.addEventListener("click", function validateAmount(){
    

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBePaid = cashGiven.value - billAmount.value;
            changeCalculator(amountToBePaid);
        } 
        
        else {
            
            shMessage("Amount paid is less that the bill, Please give us full amount");
            
        }
      }
    
}

);

function changeCalculator(amount) {
    for (let i = 0; i < availableNotes.length; i++) {
      const numberOfNotes = Math.trunc(amount / availableNotes[i]);
      amount = amount % availableNotes[i];
      noOfNotes[i].innerText = numberOfNotes;
    }
  }
  

function hideMessage(){
    msg.style.display = "none";
}

function shMessage(msg){
    msg.style.display= "block";
    msg.innerText = msg;
}
    
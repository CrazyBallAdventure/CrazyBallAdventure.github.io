function questionOne() {
    let question1 = prompt(" Whats your name and pronouns?")
    if (question1 != null) {
        document.getElementById("demo").innerHTML = question1 + " Nice name and pronouns! Where'd you get 'em from? ";
    }
}
function questionTwo() {
    let question2 = prompt("Whats your favourite colour?");
    if (question2 != null) {
      document.getElementById("demo").innerHTML = question2 + " is such an awesome colour! I like black";
  }
}
  function questionThree() {
    let question3 = prompt("Whats your favourite animal?");
    if (question3 != null) {
      document.getElementById("demo").innerHTML = question3 + "?" + " I've never heard of that one before, tell me more!";
    }
  }

  function questionFour() {
    let question4 = prompt(" Whats your favourite soda?");
    if (question4 != null) {
      document.getElementById("demo").innerHTML = question4 + " Sounds cool, I don't think I've had one of those before";
    }
  }

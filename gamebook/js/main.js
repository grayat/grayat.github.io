confirm("Are you ready to play?");
var askUser = prompt("Are you ready for the hunger games?");
askUser.toLowerCase();

switch (askUser) {
  case "yes":
    alert("Great! Continue on with the selection of the tributes");
    break;
  case "no":
    alert("Oh no! Game has ended. You lost!");
    break;
  default:
    alert("Oops! Choose a valid answer");
}

if (askUser === "yes") {
  alert("Effie: I will now begin the random selection and choose 2 lucky tribute winners. One male and one female, I will begin with choosing the female first.");
}

if (askUser === "yes") {
  alert("*Effie pulls out a piece of paper* Efiie: Well looks like we have a winner! Is there a Primrose Everdeen?");
}
if (askUser === "yes") {
  alert("*Primrose is found and is being forced out of the crowd by the guards* You, Katniss Everdeen are given the opportunity to volunteer as tribute and take your sisters place in the hunger games.");
}

askUser= prompt ("Are you going to volunteer as tribute?");

switch (askUser) {
case "yes":
    alert("Effie: Oh wow this is a first, we have a volunteer who is willing to go to the hunger games in place of her sister!");
    break;
  case "no":
    alert("Oh no! Primrose died during the hunger games and there is no hope in killing the president. Game ended....");
    break;
  default:
    alert("Oops! Choose a valid answer");
}



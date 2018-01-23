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

askUser = prompt("Are you going to volunteer as tribute?");

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


alert("Effie: Great! The male winner is Peeta.... we will waste no time.");

alert("Katniss and Peeta get to the headquaters and are given the option to start training to help them in the hunger games.");


askUser = prompt("Do you wish to train in benefit to your success in the hunger games?");


if (askUser === "yes") {
  alert("Alright Great!you will start your training immediatly.");
} else if (askUser === "no") {
  alert("Okay! you are prepared and can go straight into combat.");
}

switch (askUser) {
  case "yes":
    alert("You are well trained and ready to fight in the hunger games!");
    break;

  case "no":
    alert("Get ready the games start in 30 seconds");
    break;
}


alert("The game has started and already a girl is trying to kill you!");

askUser = prompt("Do you your gun or bow and arrow");

if (askUser === "gun") {
  alert("You aim and you shoot but you miss and run away to look for a hiding spot.");
} else if (askUser === "bow and arrow") {
  alert("You shoot and wound the girl and run away afterwards and try to hide from other tributes.");
}


alert("You are running out of supplies and you see a stash near a tree but there are 2 people garding it and you only have one arrow left");

askUser = prompt("Are you going to risk it and go fight and get the stash with only minimum supplies remaining?");

if (askUser === "yes" || "risk it") {
  alert("You aim and shoot him in the heart. As your running towards the tree the other guard is coming at you and remember that you have an extra knife in your boot. You throw the knife and kill the other guard and get the stash.");
} else if (askUser === "no") {
  alert("You have to try and survive with your little stash for as long as possible until you get another chance to gey more supplies.");
}


alert("The games have been going on for about 45 minutes now and you managed to kill around 4 people, not wanting to but having to because you need to surive and they tried to kill you first");


askUser = prompt("You see the little girl that tried to kill you ealier. Do you kill her or spare her life?");


if (askUser === "Kill her") {
  alert("You deserve to die because you took away and innocent young life. END GAME YOU LOST.........");
} else if (askUser === "spare her life") {
  alert("Oh no, you under estimated her, she took advantage of your kindness and killed you. END GAME YOU LOST......");
}

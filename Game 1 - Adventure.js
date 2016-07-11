// Check if the user is ready to play!

confirm("Game starts when you press OK for this box. :P");
var age = prompt("What's your age");
var str1 = "\nYou are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'";
var str2 = "\nSuddenly, Bieber stops and says, 'Who wants to race me?'";
var userAnswer = prompt ("Do you want to race Bieber on stage?");
var str3 = "\nYou and Bieber start racing. It's neck and neck! You win by a shoelace!";
var str4 = "\nOh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'";
var feedback = prompt("\nPlease rate the game before leaving on a scale of 1-10: ");

if (age<13)
{
	console.log("Since you are less than 13 years old, you agree that no responsibility will be taken from our side even though you are allowed tom play this game.");
}

else
{
	console.log("Hello There. Welcome to \"THE GAME\".");
}

console.log("\n" + str1);
console.log("\n" + str2);

if (userAnswer==="yes"||userAnswer==="Yes")
{
	console.log(str3);
}

else
{
	console.log(str4);
}

if(feedback>8)
{
	console.log("\n\nThank you! We should race at the next concert!");
}

else
{
	console.log("\n\nI'll keep practicing coding and racing.");
}
var input = function()
{
	var userChoice = prompt("Do you choose rock, paper or scissors? Type your choice in lower case:");
	return userChoice;
};

var compute = function()
{
    
	var computerChoice = Math.random();
	if (computerChoice < 0.34)
	{
		computerChoice = "rock";
	}

	else if (computerChoice <= 0.67)
	{
		computerChoice = "paper";
	}

	else
	{
		computerChoice = "scissors";
	}
	
	return computerChoice;
};

var compare = function (choice1, choice2)
{
	console.log ("Computer Choice: " + choice2 + "\n");
	console.log ("User Choice: " + choice1 + "\n");
	var result = "";
	if (choice1 === choice2)
	{
		result = "It's a tie. Try Again!!!";
		console.log(result);
		return result;
	}
    
	else if (choice1 === "rock")
	{
		if (choice2 === "scissors")
		{
			result = "Rock wins!";
			console.log(result);
			return result;
		}
        
		else
		{
			result = "Paper wins!";
			console.log(result);
			return result;
		}
	}
    
	else if (choice1 === "paper")
	{
		if (choice2 === "rock")
		{
			result = "Paper wins!";
			console.log(result);
			return result;
		}
        
		else
		{
			result = "Scissors wins!";
			console.log(result);
			return result;
		}
	}
    
	else if (choice1 === "scissors")
	{
		if (choice2 === "rock")
		{
			result = "Rock wins!";
			console.log(result);
			return result;
		}
        
		else
		{
			result = "Scissors wins!";
			console.log(result);
			return result;
		}
	}
    
	else
	{
		result = "Invalid User Choice!";
		console.log(result);
		return result;
	}
};

compare (input(), compute());
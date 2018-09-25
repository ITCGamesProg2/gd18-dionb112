function square(n)
{
  return n*n;
}

function howManyLightsabersDoYouOwn(name)
{
	result = 0;
	if (name ==='Zach' || name ==='zach')
	{
		result = 18;
	}
	return result;
}

function getAverage(marks)
{
	var result = 0, i = 0;
	for (i in marks)
	{
		result = result + marks[i];
	}
	return Math.floor(result / marks.length);
}

function cannonsReady (gunners) {
  var fire = 0;
  var result = 'Shiver me timbers!'
  for (var gunnerName in gunners)
  {
    if (gunners.hasOwnProperty(gunnerName))
    {
      var ready = gunners[gunnerName];
      if (ready === 'aye' || ready === 'Aye')
      {
        fire++;
      }
    }
  }
  if (fire === 4)
  {
    result = 'Fire!'
  }
  return result;
}

function aliasGen(realFirstName, realSurname)
{
		var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Delta'};
		var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Divebomb'};

		var firstInitial = realFirstName[0].toUpperCase();
		var surnameInitial = realSurname[0].toUpperCase();

		if (firstInitial < "A" || firstInitial > "Z" || surnameInitial < "A" || surnameInitial > "Z")
		{
				return "Your name must start with a letter from A - Z.";
		 
		} 
		else 
		{
			return firstName[firstInitial]+" "+surname[surnameInitial];
		}
}

function Ship(draft, crew)
{
	this.draft = draft;
	this.crew = crew;
}

function main()
{
	Ship.prototype.isWorthIt = function()
	{
		return this.draft - (this.crew * 1.5) > 20;
	}
	var emptyShip = new Ship(0,0);
	var lootyShip = new Ship(42,5);
	
	if(square(5)==25)
	{
		console.log("OK 1");
	}	
	else
	{
		console.log("FAIL 1");
	}

	if (howManyLightsabersDoYouOwn("Zach") || howManyLightsabersDoYouOwn('zach') === 18)
	{
		console.log("OK 2");
	}
	else
	{
		console.log("FAIL 2");
	}

	if (getAverage([2,2,2,2]) === 2)
	{
		console.log("OK 3.1");
	}
	else
	{
		console.log("FAIL 3.1");
	}

	if (getAverage([1,1,1,1,1,1,1,2]) === 1)
	{
		console.log("OK 3.2");
	}
	else
	{
		console.log("FAIL 3.2");
	}
	if (cannonsReady({'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}) === 'Fire!')
	{
		console.log("OK 4.1");

	}
	else
	{
		console.log("FAIL 4.1");
	}
	if (cannonsReady({'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'}) === 'Shiver me timbers!')
	{
		console.log("OK 4.2");

	}
	else
	{
		console.log("FAIL 4.");
	}

	if (aliasGen("dave", "Camlehead") === "Delta Catalyst")
	{
		console.log("OK 5.1");

	}
	else
	{
		console.log("FAIL 5.1");
	}

	if (aliasGen("anna", "bettlejuice") === "Alpha Bomb")
	{
		console.log("OK 5.2");

	}
	else
	{
		console.log("FAIL 5.2");
	}

	if (aliasGen("123", "---") === "Your name must start with a letter from A - Z.")
	{
		console.log("OK 5.3");

	}
	else
	{
		console.log("FAIL 5.3");
	}

	if (emptyShip.isWorthIt() === false)
	{
		console.log("OK 6.1");
	}
	else
	{
		console.log("FAIL 6.1");
	}
	if (lootyShip.isWorthIt() === true)
	{
		console.log("OK 6.2");
	}
	else
	{
		console.log("FAIL 6.2");
	}
}
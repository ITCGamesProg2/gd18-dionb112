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

function main()
{
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

}
function square(n)
{
  return n*n;
}

function howManyLightsabersDoYouOwn(name)
{
	result = 0;
	if (name==='Zach' || name ==='zach')
	{
		result = 18;
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

}
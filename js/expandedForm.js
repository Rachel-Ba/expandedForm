function expandedNums (num) {

  num = num.toString();
  const equation = [];
  let multiplier = 1;

  for(let i = 1; i<=num.length;i++)
  {
    const digit = num[num.length-i];
    digit > 0 && equation.unshift(digit + ' * '  +multiplier);
    multiplier*=10;
  }
  return console.log(equation.join(' + '));
}

expandedNums(568)
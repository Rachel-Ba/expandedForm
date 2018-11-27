function expandedForm(nombre) 
{
  var entier = nombre.toString()
  var resultat = []

  for(var i=0; i<entier.length; i++)
  {
    if(entier[i]>0)
    {
      var zeros = ''
      // console.log(digits.length-i-1)
      for(var j=entier.length-i-1; j>0; j--)
      {
        // console.log(z)
        zeros+='0'
      }
      resultat.push(Number(entier[i]+zeros))
    }
  }
  return console.log(resultat.join(' + '))
}



expandedForm(12)
function scuberGreetingForFeet(someValue){
  let response
  if (someValue < 400) {
    return response = 'This one is on me!';
  }
  if (someValue < 2000){
      return response = 'That will be twenty bucks.';
  }
  if (someValue <= 2500){
    return response = 'I will gladly take your thirty bucks.';
}
  else if (someValue > 2500){
    return response = 'No can do.';
  } 
  
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
  }



function switchOnCharmFromTip(tipAmount){
  switch (true) {
    case tipAmount === 'generous':
      return "Thank you so much.";
    case tipAmount === 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
      

  }

}
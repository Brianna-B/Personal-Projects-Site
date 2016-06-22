var main = function(){
  $('.play-btn').click(function(){
   var userSelection = prompt("Choose rock, paper, or scissors. Type "r" for rock, "p" for paper, or "s" for scissors");
   var compSelection = Math.random();
   if (compSelection<0.34){
     compSelection="r";
   } else if (compSelection<=0.67){
     compSelection="p";
   } else{
     compSelection="s";
   }
   var compare=function(choice1, choice2){
 if (choice1==choice2)
 return "The result is a tie!";
 else if (choice1==="r")
 {
     if(choice2==="s")
     return "The computer chose scissors, you win";
     else 
     return "The computer chose paper, computer wins";
 }
 else if (choice1==="p")
 {
  if (choice2==="r")
  return "The computer chose rock, you win";
  else
  return "The computer chose scissors, computer wins";
 }
 else if (choice1==="s")
 {
  if(choice2==="r")
  return "The computer chose rock, computer wins";
  else
  return "The computer chose paper, you win";
 }
};

compare(userSelection, computerSelection);
  });

};

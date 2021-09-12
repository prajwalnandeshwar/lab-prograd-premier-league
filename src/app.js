//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
createManager =(managerName,managerAge,currentTeam,trophiesWon) =>{
  let arr = [];
  arr.push(managerName,managerAge,currentTeam,trophiesWon);
  return arr;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
createFormation = (formation) =>{
  if(formation.length==0)
  return null;
  var objects ={
    defender :formation[0],
    midfield:formation[1],
    forward:formation[2]
  };
  return objects;

}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
filterByDebut = (year) => {
  const result = players.filter(players=>players.debut==year)
  return result;
}

//Progression 4 - Filter players that play at the position _______
filterByPosition =(position)=>{
  const result = players.filter(players=>players.position==position)
  return result;
}

//Progression 5 - Filter players that have won ______ award
filterByAward = (awardName) =>{
  let result = players.filter((players)=>{
  let allAwardsNames = players.awards.map((awards) => awards.name);
  return allAwardsNames.includes(awardName); 
  });
  return result;
}

//Progression 6 - Filter players that won ______ award ____ times
filterByAwardxTimes = (awardName, noOfTimes) =>{
  var arr = [];
  for(var i=0;i<players.length;i++){
    let count = 0;
  for(var j=0;j<players[i].awards.length;j++)
  {
    if(players[i].awards[j].name==awardName)
     count++;
  }
  if(count==noOfTimes)
  arr.push(players[i])
  
}
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
filterByAwardxCountry = (awardName, country) =>{
  var arr = [];
  for(var i=0;i<players.length;i++){
  for(var j=0;j<players[i].awards.length;j++)
  {
    if(players[i].awards[j].name==awardName&&players[i].country==country)
    arr.push(players[i])
  }
}
return arr; 
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) =>{
  var arr =[] ;
  for(var i = 0; i <players.length; i++) 
  {
  if((players[i].awards.length >= noOfAwards) && (players[i].team == team) && (players[i].age < age))
    arr.push(players[i]);
  }
  return arr;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

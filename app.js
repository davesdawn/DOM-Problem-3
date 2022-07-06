//Function to display number of items and list of items on select.
function getLists(){

//Declaring variable for number of items  
  const numOfTeams = document.querySelector("#teams").options.length; 

//Declaring an empty array for list of items  
  let arrayOfValues = [];

//Declaring variable for listed options
  const list = document.getElementById("teams").options;

 //Writing a for loop for lists 
  for (i = 0; i < list.length; i++){

//Add values to arrayOfValues
    arrayOfValues.push(list[i].value);

 //Displaying number of items and lists in the p tag with ID "info"   
    document.querySelector("#info").innerHTML = (`This is the of all ${numOfTeams}  teams; ${arrayOfValues.toString()}.`);
  
}
}
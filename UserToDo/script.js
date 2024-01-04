function addPersonDetail(){
  // Get the Name And age entered in textbox by user
  let personName = document.getElementById("personName").value;
  let personAge = document.getElementById("personAge").value;

  // Create an empty array to store the objects
  const personDetails = [];

  // Create an object with the user's input
  const person = {
    name:personName,
    age:personAge,
  };

  // Add the object to the array
  personDetails.push(person);

  //get the table data
  let personNameDisplay = document.getElementById("personNameDisplay");
  let personAgeDisplay = document.getElementById("personAgeDisplay");

  // run for loop to access details inside object and Array
  let i;
  for (i = 0; i < personDetails.length; i++) {
    let obj = personDetails[i];
    let n = obj.name;
    let a = obj.age;

    personNameDisplay.textContent = n;
    personAgeDisplay.textContent = a;
    console.log(n, a);
  }


  // put empty value initially
  document.getElementById("personName").value = "";
  document.getElementById("personAge").value = "";
}


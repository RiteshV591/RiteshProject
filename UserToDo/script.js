const personDetails = [];

function addPersonDetail() {
  // Get the Name And age entered in textbox by user
  let personName = document.getElementById("personName").value;
  let personAge = document.getElementById("personAge").value;

  // Create an object with the user's input
  const person = {
    name: personName,
    age: personAge,
  };

  // Add the object to the array
  personDetails.push(person);

  // Get the table data
  let userDetailsTable = document.getElementById("userDetailsTable");

  // Create a new row for each person added
  let newRow = userDetailsTable.insertRow();

  // Add cells for Index, Name, Age, and Buttons
  let indexCell = newRow.insertCell(0);
  let nameCell = newRow.insertCell(1);
  let ageCell = newRow.insertCell(2);
  let buttonsCell = newRow.insertCell(3);

  // Set the index, name, and age in the cells
  indexCell.innerHTML = personDetails.length;
  nameCell.innerHTML = person.name;
  ageCell.innerHTML = person.age;

  // Add buttons to the buttons cell (you can modify this based on your needs)
  buttonsCell.innerHTML = `
    <div class="modifyDetailsBtn">
      <button class="update btn">Update &#10226;</button>
      <button class="remove btn">Remove &#9747;</button>
    </div>
  `;

  // put empty value initially
  document.getElementById("personName").value = "";
  document.getElementById("personAge").value = "";
}

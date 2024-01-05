


function newElement() {
  // Get the value entered in the textbox
  let inputTaskFromUser = document.getElementById("inputTask").value;

  // Create a new list element
  let listitem = document.createElement("li");

  // Create a new TextNode from the retrieved value of the input task box
  let taskNode = document.createTextNode(inputTaskFromUser);

  // Append the TextNode to the list initially
  listitem.appendChild(taskNode);

  // When the user clicks the add button, if the value is empty, then show an alert; else, add the value to the UL
  if (inputTaskFromUser.trim() === '') { // .trim will remove any extra spaces from the user side
      alert('Task Should not be Empty!!');
  } else {
      document.getElementById("myUL").appendChild(listitem);

      // Calling Show notification function and passing the string to show in the notification
      showNotification(`New task added: ${inputTaskFromUser}`);
  }

  // Set value inside the task input box "blank" initially
  document.getElementById("inputTask").value = "";

  // --- Showing close task button ---

  // Creating a new element called span
  let removeTaskSpan = document.createElement("SPAN");

  // Creating a text node of the close icon using unicode characters
  let txt = document.createTextNode("\u00D7");

  // Assigning the "close" class name to the newly created span
  removeTaskSpan.className = "close";

  // Appending the close icon to the span
  removeTaskSpan.appendChild(txt);

  // Appending the close span to each list item that is being hovered
  listitem.appendChild(removeTaskSpan);

  // Adding click event to each close button
  for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
      }
  }
}

// Created a new local variable to get the unordered list
let list = document.querySelector('ul');

// Adding an event listener for the click event to identify which task is getting selected
list.addEventListener('click', (ev) => {
  // Check if the clicked element is an LI (list item)
  if (ev.target.tagName === 'LI') {
      // Toggle the 'checked' class to visually mark the task as selected
      ev.target.classList.toggle('checked');
  }
}, false);

// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  // Create a new span element for the close button
  var span = document.createElement("SPAN");

  // Create a text node containing the close icon
  var txt = document.createTextNode("\u00D7");

  // Assign the "close" class to the newly created span
  span.className = "close";

  // Append the close icon text node to the span
  span.appendChild(txt);

  // Append the close span to each list item
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
      // Get the parent element (LI) of the clicked close button
      var div = this.parentElement;

      // Hide the parent element (LI) by setting its display property to "none"
      div.style.display = "none";
  }
}

// Function to show notification
function showNotification(message) {
  // Create a notification element
  const notification = document.createElement('div');

  // Assign the 'notification' class to the notification element for styling
  notification.className = 'notification';

  // Set the text content of the notification to the provided message
  notification.textContent = message;

  // Append the notification element to the body of the document
  document.body.appendChild(notification);

  // Remove the notification after 3 seconds by adjusting its display property
  setTimeout(() => {
      notification.style.display = 'none';
  }, 3000);
}

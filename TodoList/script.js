function newElement(){
    //get the value entered in textbox
    var inputValue = document.getElementById("myInput").value;

    //create a new list element
    var li = document.createElement("li");

    //create a new TextNode from the Retrived value of input box
    var t = document.createTextNode(inputValue);

    // append the TextNode to the List initially
    li.appendChild(t);

    // when user click add button, if the value is empty then show alert else add the value to the UL
    if(inputValue === ''){
        alert('Task Should not be Empty!!');
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    // set input value blank initially
    document.getElementById("myInput").value = "";

    li.addEventListener('click', )

    

}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
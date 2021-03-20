


let input = document.getElementById('enter-data');
let add = document.getElementById('collect');
let list = document.getElementById('list');
let error = document.getElementById("feedback");

function addItem() {
    
//    alert('add item runs!');
    input.value = input.value.trim();
    
    //create new list item
    let li = document.createElement('li');
    //collect the user input
    if (input.value) {
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
        error.innerText= "";
    }
    else {
        //let feedback = alert('Nothing entered');
        
        error.innerText = "Please enter an item...";
    }
    
    
    
}

add.addEventListener('click', addItem);
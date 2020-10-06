console.log('script loaded');

//add click event handler on add button
let $button = document.getElementById("add");
let $todo = document.getElementById("todoText");
let $list = document.getElementById("todoContent");
let $completed = document.getElementById("completed")
$button.onclick = addToDo;

//change header on click
let $header = document.getElementById("header");
$header.onclick = () =>{
    if($header.style.color!='red'){ $header.style.color = 'red';}
    else{$header.style.color = 'white'; }
}
//define button click handeler
function addToDo(){
//console.log("button clicked");
//get todo text
let todoText = $todo.value;
$todo.value = "";

//console.log(todoText);

//make list item
let $newTodoItem = document.createElement("li")
$newTodoItem.innerHTML = `${todoText}<button onclick='done(event)' class='doneButton'>done</button> <button class='doneButton' onclick='deleteTask(event)'>delete</button>`;
//add todo to list
$list.append($newTodoItem);
}

function done(event){
   let $listItem = event.target.parentElement;
    event.target.remove();
    $listItem.style.textDecoration = "line-through";
    console.log($listItem);
    $completed.append($listItem);
    console.log("done");
}

function deleteTask(event){
    let $listItem = event.target.parentElement;
    $listItem.remove();
    console.log("deleted");

}
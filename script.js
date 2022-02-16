let taskText = document.querySelector("input[type=text]");
let form = document.querySelector("form");
let incompleteList = document.querySelector(".incomplete-list");
let completeList = document.querySelector(".complete-list");

let insertElement = (value, whatlist) =>{
    task = value;
    if(whatlist.className =="incomplete-list"){
        hr = document.createElement("hr")
        whatlist.appendChild(hr)

        let taskElement = document.createElement("div");
        taskElement.className = "list";
        whatlist.appendChild(taskElement)

        let lastChild = whatlist.lastChild;

        input = document.createElement("input");
        input.type = "checkbox"
        lastChild.appendChild(input)

        li = document.createElement("li");
        li.className = "list-item";
        li.innerHTML = task;
        lastChild.appendChild(li)
        
        
    }
    else{
        
        hr = document.createElement("hr")
        whatlist.appendChild(hr)

        let taskElement = document.createElement("div");
        taskElement.className = "list";
        whatlist.appendChild(taskElement)

        let lastChild = whatlist.lastChild;

        btn = document.createElement("button");
        btn.className = "deleteBtn";
        btn.innerHTML = "Delete";
        lastChild.appendChild(btn)

        li = document.createElement("li");
        li.className = "list-item";
        li.innerHTML = task;
        lastChild.appendChild(li)
    }
    deleteElement()
        
}



form.addEventListener("submit", (event) => {
    event.preventDefault();
    task = taskText.value;
    insertElement(task, incompleteList);
    taskText.value=""
    deleteIncompleteTask()
   
})


let deleteElement = () =>{

    let deleteBtns = document.querySelectorAll('.deleteBtn');
    for(let deleteBtn of deleteBtns){
        deleteBtn.addEventListener("click", (event) => {
        let btn  = event.target;
        btn.closest(".list").remove()  
    })
}

}
deleteElement()



let deleteIncompleteTask = () =>{
    let checkbtns = document.querySelectorAll("input[type=checkbox]");

    for(let checkbtn of checkbtns){
        checkbtn.addEventListener("click", (event) => {
            let check  = event.target;
            
            check.checked 
            if(check.checked ){
                
                let sibling = check.nextElementSibling;
                insertElement(sibling.innerHTML, completeList);
                check.parentNode.remove();
            }
          

        })
    }
}
deleteIncompleteTask();





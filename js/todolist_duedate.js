
// let toDoListLoop = [
    // {name :'Javascript',
    // dueDate : '13/01/2024'}, 
    // {name :'Jquer',
    // dueDate : '18/01/2024'}
// ];

console.log("Local Storage : " ,JSON.parse(localStorage.getItem('storedTaskItem')))

let toDoListLoop = JSON.parse(localStorage.getItem('storedTaskItem'))
console.log('Array is : ',toDoListLoop)
if(toDoListLoop === null ){
    toDoListLoop = [];
 }

 else{
    renderTypedText();
 }



function addTaskLoop(){

    let typedTask = document.querySelector('.js-typed-task-loop');
    let typedTaskValue = typedTask.value;
    let typedDate = document.querySelector('.js-typed-date-loop');
    let typedDateValue = typedDate.value;
    
    if(typedDateValue != '' || typedTaskValue != ''){
        typedTask.value = '';
        typedDate.value = '';
    }
    if(typedTaskValue === ''){
        alert('Please fill task field to continue')
        document.querySelector('.js-typed-date-loop').value = typedDateValue;

    }

    else if(typedDateValue === ''){
        alert('Please select a date to continue')
        document.querySelector('.js-typed-task-loop').value = typedTaskValue;

    }

    toDoListLoop.push({name : typedTaskValue, dueDate: typedDateValue }) 
    renderTypedText()

}

function renderTypedText(){
    let resulthtml = '';

    for(let i=0;i<toDoListLoop.length;i++){
        let typedObject = toDoListLoop[i];
        if(typedObject.name==='' || typedObject.dueDate === ''){
            continue;
        }
        let htmlElement =`<div class="css-display-task">${typedObject.name}</div> 
        <div class="css-display-date">${typedObject.dueDate}</div>
        <button class="css-delete-btn"
        onclick="
        toDoListLoop.splice(${i},1); 
        renderTypedText();
        ">
        Delete
        </button>  `
        resulthtml+=htmlElement
    }
    document.querySelector('.js-display-task-loop').innerHTML = resulthtml;


    localStorage.setItem('storedTaskItem',JSON.stringify(toDoListLoop))
    
    // console.log(JSON.stringify(toDoListLoop))
}


function displayTaskOnEnterKey(event){

    if(event.key === 'Enter')
    {
        addTaskLoop()    
    }


}



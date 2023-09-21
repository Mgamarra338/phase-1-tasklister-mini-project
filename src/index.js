document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector('form');
    document.querySelectorAll('input')[1].id = 'new_todo'
  
    form.addEventListener('submit', (e) =>{
      e.preventDefault();
      buildToDo(e.target.new_task_description.value)
      console.log(e.target.new_task_description.value)
      form.reset;
    })
})

function buildToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteHandle);
  btn.textContent = ' x ';
  console.log(todo)
  p.textContent = ` ${todo} `;
  p.appendChild(btn);
  console.log(p)
  console.log(document.querySelector('#tasks'))
  document.querySelector('#tasks').appendChild(p)
}

function deleteHandle(e){
  e.target.parentNode.remove()
}


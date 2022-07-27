
    function formValidation(){

        let newTask = document.getElementById("newTaskInput").value;
        
        if(newTask.includes('<') || newTask.includes('>')){
            
            document.getElementById("error").innerHTML = "Please make sure your task contains no HTML characters";
        }else{
            document.getElementById("error").innerHTML = "";
            addToList();
        } 
    }

    function addToList(){

        let newTask = document.getElementById("newTaskInput").value;

        const list = document.createElement("li");
        list.innerHTML = newTask;
        document.getElementById("taskList").appendChild(list);

    }

    function validate() {

      if( document.newTaskForm.newTask.value == "" ) {
         alert( "Please enter a new task!" );
         document.newTaskForm.newTask.focus() ;
         return false;
      }

      if( document.newTaskForm.dueDate.value == "" ) {
         alert( "Please enter a due date!" );
         document.newTaskForm.dueDate.focus() ;
         return false;
      }

      if( document.newTaskForm.dueTime.value == "" ) {
         alert( "Please enter a time due!" );
         document.newTaskForm.dueTime.focus() ;
         return false;
      }

      formValidation();
    }
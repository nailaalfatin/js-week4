document.getElementById("judul").style.color = "#213555";


//mendapatkan elemen

var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

//fungsi untuk menambahkan tugas

function addTask () {
    var taskText = taskInput.value;
    if(taskText.trim() !== '') {
        var li = document.createElement('li');
        li.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        var taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        var deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'Hapus';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        }

        li.appendChild(checkbox);
        li.appendChild(taskTextSpan);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = '';

    }
}



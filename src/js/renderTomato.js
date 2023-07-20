export class Task {
  constructor(text, importance) {
    this.id = this.generateUniqueId();
    this.text = text;
    this.count = 0;
    this.importance = importance;
  }

  generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}

export class ImportantTask extends Task {
  constructor(text) {
    super(text, 'important');
  }
}

export class StandardTask extends Task {
  constructor(text) {
    super(text, 'default');
  }
}

export class UnimportantTask extends Task {
  constructor(text) {
    super(text, 'so-so');
  }
}



export class RenderTomato {
  constructor(container, controller) {
    this.container = container;
    this.controller = controller;
    this.taskList = this.createTaskListElement();
    this.container.appendChild(this.taskList);


    this.addEventListeners();
  }

  createTaskListElement() {
    const taskList = document.createElement('ul');
    taskList.className = 'pomodoro-tasks__quest-tasks';
    return taskList;
  }

  renderTaskList(tasks) {
    this.taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      task.count = index + 1; 
      const taskItem = document.createElement('li');
      taskItem.className = `pomodoro-tasks__list-task ${task.importance}`;
      taskItem.setAttribute('data-task-id', task.id); 
      taskItem.innerHTML = `
        <span class="count-number">${task.count}</span>
        <button class="pomodoro-tasks__task-text">${task.text}</button>
        <button class="pomodoro-tasks__task-button"></button>
      `;
      this.taskList.appendChild(taskItem);
    });
  }

  renderTaskForm(addTaskHandler) {
    const taskForm = document.querySelector('.task-form');
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskNameInput = document.getElementById('task-name');
      const taskName = taskNameInput.value;
      addTaskHandler(taskName);
      taskNameInput.value = '';
    });
  }

  renderActiveTask(activeTask) {
    const activeTaskElement = document.querySelector('.window__panel-title');
    if (activeTask) {
      activeTaskElement.textContent = activeTask.text;
      const taskNumberElement = document.querySelector('.window__panel-task-text');
    taskNumberElement.textContent = `Томат ${activeTask.count}`;
    
    } else {
      activeTaskElement.textContent = 'No active task.';
    }
  }



  addEventListeners() {
 
    this.taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('pomodoro-tasks__task-text')) {
        const taskElement = event.target.closest('.pomodoro-tasks__list-task');
        const taskId = taskElement.getAttribute('data-task-id');
      
        this.controller.activateTask(taskId);
      }
    });

 

    const startButton = document.querySelector('.button.button-primary');
    startButton.addEventListener('click', () => {
      this.controller.runActiveTask();
    });
  }
}

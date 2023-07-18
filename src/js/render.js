
import {ImportantTask , UnimportantTask, StandardTask } from './task.js' 

export class RenderTomato {
    constructor(container) {
      this.container = container;
      this.taskList = this.createTaskListElement();
      this.container.appendChild(this.taskList);
    }
  
    createTaskListElement() {
      const taskList = document.createElement('ul');
      taskList.className = 'pomodoro-tasks__quest-tasks';
      return taskList;
    }
  
    renderTaskList(tasks) {
      this.taskList.innerHTML = '';
  
      tasks.forEach((task) => {
        const taskItem = document.createElement('li');
        taskItem.className = `pomodoro-tasks__list-task ${task.importance}`;
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
  }
  
  export class ControllerTomato {
    constructor(timer, render) {
      this.timer = timer;
      this.render = render;
  
      this.render.renderTaskForm(this.handleAddTask.bind(this));
    }
  
    handleAddTask(taskName) {
      const importanceClass = document.querySelector('.button-importance').classList;
  
      let task;
      if (importanceClass.contains('important')) {
        task = new ImportantTask(taskName);
      } else if (importanceClass.contains('so-so')) {
        task = new UnimportantTask(taskName);
      } else {
        task = new StandardTask(taskName);
      }
  
      this.timer.addTask(task);
      this.render.renderTaskList(this.timer.tasks);
    }
  }
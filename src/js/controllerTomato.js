import { ImportantTask, StandardTask, UnimportantTask } from './renderTomato.js';


export class ControllerTomato {
  constructor(timer, render) {
    this.timer = timer;
    this.render = render;

    this.render.renderTaskForm(this.handleAddTask.bind(this));
    this.render.renderTaskList(this.timer.tasks);
  }

  handleAddTask(taskName) {
    let task;
    const importanceClass = document.querySelector('.button-importance').classList;

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

  activateTask(taskId) {
    this.timer.activateTask(taskId);
    this.render.renderActiveTask(this.timer.active_task);
  }

  runActiveTask() {
    this.timer.runTask();
  }
}
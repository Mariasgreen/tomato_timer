import { TomatoTimer } from './timer.js';
import { RenderTomato} from './renderTomato.js';
import { ControllerTomato } from './controllerTomato.js';


export class Tomato {
  constructor() {
    this.timer = new TomatoTimer();
    this.containerElement = document.querySelector('.pomodoro-tasks');
    this.render = new RenderTomato(this.containerElement, this);
    this.controller = new ControllerTomato(this.timer, this.render);
    this.activeTaskId = null;

   
    this.addEventListeners();
  }

  addEventListeners() {

    this.containerElement.addEventListener('click', (event) => {
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

  activateTask(taskId) {
    this.timer.activateTask(taskId);
    this.activeTaskId = taskId;
    this.render.renderActiveTask(this.timer.active_task);
  }

  runActiveTask() {
    this.timer.runTask();
  }
}

export class TomatoTimer {
  constructor() {
    this.tasks = [];
    this.active_task = null;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  activateTask(taskId) {
    this.active_task = this.tasks.find((task) => task.id === taskId);
  }

  runTask() {
    if (this.active_task) {
      console.log(`Running task: ${this.active_task.text}`);
    } else {
      console.log('No active task.');
    }
  }
}

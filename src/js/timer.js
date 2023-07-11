class TomatoTimer {
    constructor(params) {
      this.time_to_complete = params.time_to_complete || 25;
      this.pause_time = params.pause_time || 5;
      this.long_pause_time = params.long_pause_time || 15;
      this.tasks = params.tasks || [];
      this.active_task = null;
    }
  
    addTask(task) {
      this.tasks.push(task);
      console.log("Task added:", task);
    }
  
    activateTask(taskId) {
      for (const task of this.tasks) {
        if (task.id === taskId) {
          this.active_task = task;
          console.log("Task activated:", this.active_task);
          break;
        }
      }
    }
  
    runTask() {
      if (this.active_task) {
        try {
          this.startTaskTimer();
          this.active_task.counter += 1;
          this.startRestTimer();
          if (this.active_task.counter % 3 === 0) {
            this.startLongPauseTimer();
          } else {
            this.startPauseTimer();
          }
          this.increaseTaskCounter(this.active_task.id);
        } catch (error) {
          console.log("An error occurred:", error);
        }
      } else {
        console.log("No active task.");
      }
    }
  
    startTaskTimer() {
      console.log(" nachalo:", this.active_task);
    }
  
    startRestTimer() {
      console.log("Rest timer ");
    }
  
    startPauseTimer() {
      console.log("Short pause ");
    }
  
    startLongPauseTimer() {
      console.log("Long pause ");
    }
  
    increaseTaskCounter(taskId) {
      for (const task of this.tasks) {
        if (task.id === taskId) {
          task.counter += 1;
          console.log(" increased:", task);
          break;
        }
      }
    }
  }
  

  const timer = new TomatoTimer({});

timer.addTask({ id: 1, name: "Task 1", counter: 2 });


timer.activateTask(1);
timer.runTask();

timer.increaseTaskCounter(1);

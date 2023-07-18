import '../scss/index.scss';

import {TomatoTimer} from './timer.js'
import {RenderTomato,ControllerTomato} from './render.js'


let count = 0;
const imp = ['default', 'important', 'so-so'];
document.querySelector('.button-importance').addEventListener('click', ({ target }) => {
  count += 1;
  if (count >= imp.length) {
    count = 0;
  }

  for (let i = 0; i < imp.length; i++) {
    if (count === i) {
      target.classList.add(imp[i]);
    } else {
      target.classList.remove(imp[i]);
    }
  }
});







const timer = new TomatoTimer();
const containerElement = document.querySelector('.pomodoro-tasks');
const render = new RenderTomato(containerElement);
const controller = new ControllerTomato(timer, render);


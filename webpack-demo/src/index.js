// import your function
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('William');
  return element;
}

document.body.appendChild(component());
const buttonNo = document.getElementById('buttonNo');

buttonNo.addEventListener('mouseover', moveButtonRandomly);

function moveButtonRandomly() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  const buttonWidth = buttonNo.offsetWidth;
  const buttonHeight = buttonNo.offsetHeight;
  
  const maxLeft = vw - buttonWidth;
  const maxTop = vh - buttonHeight;

  const randomLeft = Math.floor(Math.random() * maxLeft);
  const randomTop = Math.floor(Math.random() * maxTop);
  
  buttonNo.classList.add('move-animation');
  buttonNo.style.left = randomLeft + 'px';
  buttonNo.style.top = randomTop + 'px';
}


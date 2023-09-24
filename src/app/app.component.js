document.querySelector('.details').addEventListener('click', (e) => {
    const crd = document.querySelector('.card p');
    const disp = crd.style.display;
    
    if (disp === 'none') {
      crd.style.display = 'block';
    } else {
      crd.style.display = 'none';
    }
  });
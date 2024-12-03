let cards = document.querySelector('.card'),
  player = document.querySelector('.player');

  cards.forEach(card => {
    let width = card.offsetWidth;
    let height = card.offsetHeight;

    card.addEventListener('mousemove', el => {
      let xVal = el.offsetX;
      let yVal = el.offsetY;

      let xRotation = ((yVal - height / 2) / height) * -20;
      let yRotation = ((xVal - width / 2) / widtht) * 20;
      let css = 'perspective(500px) scale(1.07) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
      el.target.style.transform = css;

    });

    card.addEventListener('mouseout', el => {
      el.target.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    });

    card.addEventListener('click', el => {
      let sound = el.target.parentElement.dataset.sound;
      player.setAttribute('src', `mp3/${sound}.mp3`);
      player.play();
    });
  });
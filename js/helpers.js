
export const convertStringNumber = (str) => {
  const noSpaceStr = String(str).replace(/\s+/g, '');
  const num = parseFloat(noSpaceStr);

  if (!isNaN(num) && isFinite(num)) {
   return num;
  } else {
   return false;
  }
};

export const reformatDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-');
  return `${day.padStart(2,'0')}.${month.padStart(2,'0')}.${year}`;
}

/*
export const animationNumberOld = (element, number) => {
  const fps = 60; // кол-во кадров
  const duration = 1000;  // длительность
  const frameDuration = duration / fps; // длительность одного кадра
  const totalFrame = Math.round(duration / frameDuration); // количество всего кадров

  let currentFrame = 0; // текущий кадр

  const initialNumber = parseInt(
    element.textContent.replace(/[^0-9.-]+/g, ''),
    );
  const increment = Math.trunc((number - initialNumber) / totalFrame);

  const intervalId = setInterval(() => {
    currentFrame++;

    const newNumber = initialNumber + increment * currentFrame;

    element.textContent = `${newNumber.toLocaleString()} ₽`;

    if (currentFrame === totalFrame) {
      clearInterval(intervalId);
      element.textContent = `${number.toLocaleString()} ₽`;
    }
  }, frameDuration);
};
*/

export const animationNumber = (element, number) => {
  const fps = 60; // кол-во кадров
  const duration = 1000;  // длительность
  const frameDuration = duration / fps; // длительность одного кадра
  const totalFrame = Math.round(duration / frameDuration); // количество всего кадров

  let currentFrame = 0; // текущий кадр

  const initialNumber = parseInt(
    element.textContent.replace(/[^0-9.-]+/g, ''),
    );
  const increment = Math.trunc((number - initialNumber) / totalFrame);

  const animate = () => {
    currentFrame++;
    const newNumber = initialNumber + increment * currentFrame;
    element.textContent = `${newNumber.toLocaleString()} ₽`;

    if (currentFrame < totalFrame) {
      requestAnimationFrame(animate);
    } else {
      element.textContent = `${number.toLocaleString()} ₽`;
    }
  };
  requestAnimationFrame(animate);
};

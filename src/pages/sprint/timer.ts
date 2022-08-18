export const timer = () => {
  const timeString = document.getElementById('timer');
  const setIntervalId = setInterval(() => {
    if (+(timeString as HTMLElement).innerText < 1) {
      clearInterval(setIntervalId);
    } else {
      (timeString as HTMLElement).innerText = String(+(timeString as HTMLElement).innerText - 1);
    }
  }, 1000);
};

export default timer;

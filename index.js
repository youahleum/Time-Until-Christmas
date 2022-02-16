const clockTitle = document.querySelector(".js-clock");

function clock() {
  //   event.preventDefault();
  const date = new Date();
  const xmas = new Date("2022-12-25");
  let minusday = xmas - date;
  const days = Math.floor(minusday / (1000 * 60 * 60 * 24));
  minusday -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(minusday / (1000 * 60 * 60));
  minusday -= hours * (1000 * 60 * 60);
  const mins = Math.floor(minusday / (1000 * 60));
  minusday -= mins * (1000 * 60);
  const sec = Math.floor(minusday / 1000);

  clockTitle.innerText = `${days}d ${hours}h ${mins}m ${sec}s`;
}
clock();
setInterval(clock, 1000);

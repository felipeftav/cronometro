function relogio() {
  const relogio = document.querySelector(".timer");
  /* const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const reiniciar = document.querySelector(".reiniciar"); */

  function formataSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(function () {
      seconds++;
      relogio.innerHTML = formataSegundos(seconds);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      startClock();
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (el.classList.contains("reiniciar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      seconds = 0;
    }
  });
}
relogio();
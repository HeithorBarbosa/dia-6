function multa() {
  let vel = document.getElementById("vel1");
  let multass = document.getElementById("multas");
  let velo = Number(vel.value);
  if (velo > 60) {
    multass.innerText = "multado";
  } else {
    multas.innerText = "pode ir";
  }
}

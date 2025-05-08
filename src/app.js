function generarCarta() {
  const simbolos = ["♥", "♦", "♣", "♠"];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  const esRojo = simbolo === "♥" || simbolo === "♦";

  const cartaHTML = `
    <div class="esquina superior ${esRojo ? 'rojo' : ''}">${valor}<br>${simbolo}</div>
    <div style="color: ${esRojo ? 'red' : 'black'};">${simbolo}</div>
    <div class="esquina inferior ${esRojo ? 'rojo' : ''}">${valor}<br>${simbolo}</div>
  `;

  document.getElementById("carta").innerHTML = cartaHTML;
}


window.onload = generarCarta;
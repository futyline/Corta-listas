const btnDividir = document.getElementById('btnDividir');
const btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limparNumeros);

function limparNumeros() {
  document.getElementById("numeros").value = "";
  document.getElementById("resultados").innerHTML = "";
}

btnDividir.addEventListener('click', () => {
  const numerosInput = document.getElementById('numeros');
  const quantidadeInput = document.getElementById('quantidade');
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = '';
  const numeros = numerosInput.value.trim().split('\n');
  const quantidade = parseInt(quantidadeInput.value);
  const numerosPorSublista = Math.ceil(numeros.length / quantidade);
  resultadosDiv.innerHTML += `<p>Total de números: ${numeros.length}</p>`;

  for (let i = 0; i < quantidade; i++) {
    const inicio = i * numerosPorSublista;
    const fim = inicio + numerosPorSublista;
    const sublista = numeros.slice(inicio, fim);

    resultadosDiv.innerHTML += `
      <p>Base ${i + 1} (${sublista.length} números):</p>
      <textarea rows="10">${sublista.join('\n')}</textarea>
      `;
  }
});

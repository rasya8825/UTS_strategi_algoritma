document.getElementById('tombolUrut').addEventListener('click', function () {
  const input = document.getElementById('inputAngka').value;
  const array = input
    .split(',')
    .map(Number)
    .filter((n) => !isNaN(n));
  const langkah = document.getElementById('langkah');
  const hasil = document.getElementById('hasil');
  const kompleksitas = document.getElementById('kompleksitas');
  const totalLangkah = document.getElementById('total-langkah');
  let stepOutput = '';
  let timeComplexity = 0;

  if (array.length === 0) {
    alert('Silakan masukkan angka yang valid!');
    return;
  }

  langkah.innerHTML = '';
  totalLangkah.innerHTML = '';

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      timeComplexity++;
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }

      stepOutput += `<li>Langkah ${timeComplexity}: ${array.join(', ')}</li>`;
    }
  }

  langkah.innerHTML = stepOutput;
  hasil.innerText = `Array terurut: ${array.join(', ')}`;
  kompleksitas.innerText = `Tn = O(n^2) (Dalam kasus terburuk)`;
  totalLangkah.innerHTML = `Jumlah langkah yang dibutuhkan: ${timeComplexity}`;
});

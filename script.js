const form = document.getElementById('form-transaksi');
const daftar = document.getElementById('daftar-transaksi');
const totalEl = document.getElementById('total');

let transaksi = JSON.parse(localStorage.getItem('transaksi')) || [];

function renderTransaksi() {
  daftar.innerHTML = '';
  let total = 0;
  transaksi.forEach((item, index) => {
    total += item.jumlah;
    const li = document.createElement('li');
    li.textContent = `${item.deskripsi}: ${item.jumlah}`;
    daftar.appendChild(li);
  });
  totalEl.textContent = total;
  localStorage.setItem('transaksi', JSON.stringify(transaksi));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const deskripsi = document.getElementById('deskripsi').value;
  const jumlah = parseFloat(document.getElementById('jumlah').value);
  if (!deskripsi || isNaN(jumlah)) return;

  transaksi.push({ deskripsi, jumlah });
  renderTransaksi();
  form.reset();
});

renderTransaksi();

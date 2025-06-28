function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function hitungGaji() {
  const gajiPokok = parseFloat(document.getElementById("gajiPokok").value) || 0;
  const tunjangan = parseFloat(document.getElementById("tunjangan").value) || 0;
  const bonus = parseFloat(document.getElementById("bonus").value) || 0;

  const pajak = parseFloat(document.getElementById("pajak").value) || 0;
  const bpjs = parseFloat(document.getElementById("bpjs").value) || 0;
  const lainnya = parseFloat(document.getElementById("lainnya").value) || 0;

  const totalPendapatan = gajiPokok + tunjangan + bonus;
  const totalPotongan = pajak + bpjs + lainnya;
  const gajiBersih = totalPendapatan - totalPotongan;

  const hasil = `
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between">
        <span>Gaji Pokok</span><span>${formatRupiah(gajiPokok)}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <span>Tunjangan</span><span>${formatRupiah(tunjangan)}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <span>Bonus</span><span>${formatRupiah(bonus)}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between fw-bold">
        <span>Total Pendapatan</span><span>${formatRupiah(totalPendapatan)}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <span>Pajak</span><span>${formatRupiah(pajak)}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <span>BPJS</span><span>${formatRupiah(bpjs)}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <span>Potongan Lainnya</span><span>${formatRupiah(lainnya)}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between fw-bold text-danger">
        <span>Total Potongan</span><span>${formatRupiah(totalPotongan)}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between fw-bold text-success">
        <span>Gaji Bersih</span><span>${formatRupiah(gajiBersih)}</span>
      </li>
    </ul>
  `;

  document.getElementById("hasilSimulasi").innerHTML = hasil;
}
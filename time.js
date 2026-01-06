// Fungsi untuk menampilkan waktu real-time di Finbridge
function updateTime() {
    var waktu = new Date();

    // Format waktu: HH:MM:SS
    var jam = waktu.getHours();
    var menit = waktu.getMinutes();
    var detik = waktu.getSeconds();
    var timeString = (jam < 10 ? '0' : '') + jam + ':' + (menit < 10 ? '0' : '') + menit + ':' + (detik < 10 ? '0' : '') + detik;

    // Format tanggal: Hari, DD Bulan YYYY
    var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var hari = waktu.getDay();
    var bulan = waktu.getMonth();
    var tgl = waktu.getDate();
    var tahun = waktu.getFullYear();
    var dateString = namaHari[hari] + ', ' + tgl + ' ' + namaBulan[bulan] + ' ' + tahun;

    // Update elemen HTML
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;
}

// Update waktu setiap detik
setInterval(updateTime, 1000);

// Panggil sekali saat load
updateTime();
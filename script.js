// script.js

// 1. Dapatkan elemen HTML yang akan kita interaksi
const tebakanInput = document.getElementById('tebakanInput');
const cekTombol = document.getElementById('cekTombol');
const pesanHasil = document.getElementById('pesanHasil');
const resetTombol = document.getElementById('resetTombol');

// 2. Inisialisasi variabel game
let angkaRahasia = Math.floor(Math.random() * 100) + 1; // Angka acak antara 1 dan 100
let jumlahTebakan = 0;

// Fungsi untuk memulai game baru (mereset semua)
function mulaiGameBaru() {
    angkaRahasia = Math.floor(Math.random() * 100) + 1;
    jumlahTebakan = 0;
    pesanHasil.textContent = ''; // Kosongkan pesan hasil
    tebakanInput.value = ''; // Kosongkan input
    tebakanInput.disabled = false; // Aktifkan kembali input
    cekTombol.disabled = false; // Aktifkan kembali tombol cek
    resetTombol.classList.add('hidden'); // Sembunyikan tombol reset
}

// 3. Tambahkan "pendengar" event untuk tombol "Cek Tebakan"
cekTombol.addEventListener('click', function() {
    const tebakanPengguna = parseInt(tebakanInput.value); // Ambil nilai dari input dan ubah ke angka

    // Validasi input: pastikan pengguna memasukkan angka
    if (isNaN(tebakanPengguna) || tebakanPengguna < 1 || tebakanPengguna > 100) {
        pesanHasil.textContent = 'Silakan masukkan angka valid antara 1 dan 100.';
        pesanHasil.style.color = 'orange'; // Ubah warna pesan jadi orange
        return; // Hentikan fungsi jika input tidak valid
    }

    jumlahTebakan++; // Tambah jumlah tebakan

    // Logika game
    if (tebakanPengguna === angkaRahasia) {
        pesanHasil.textContent = `Selamat! Kamu menebak dengan benar ${angkaRahasia} dalam ${jumlahTebakan} tebakan!`;
        pesanHasil.style.color = 'green'; // Ubah warna pesan jadi hijau
        // Nonaktifkan input dan tombol cek setelah menang
        tebakanInput.disabled = true;
        cekTombol.disabled = true;
        resetTombol.classList.remove('hidden'); // Tampilkan tombol reset
    } else if (tebakanPengguna < angkaRahasia) {
        pesanHasil.textContent = 'Terlalu rendah! Coba lagi.';
        pesanHasil.style.color = 'red'; // Ubah warna pesan jadi merah
    } else { // tebakanPengguna > angkaRahasia
        pesanHasil.textContent = 'Terlalu tinggi! Coba lagi.';
        pesanHasil.style.color = 'red'; // Ubah warna pesan jadi merah
    }

    tebakanInput.value = ''; // Kosongkan input setelah setiap tebakan
    tebakanInput.focus(); // Fokuskan kembali kursor ke input
});

// 4. Tambahkan "pendengar" event untuk tombol "Main Lagi"
resetTombol.addEventListener('click', mulaiGameBaru);

// Panggil fungsi ini sekali saat halaman pertama kali dimuat
mulaiGameBaru();
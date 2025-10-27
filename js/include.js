document.addEventListener("DOMContentLoaded", () => {

  // Ambil semua item kategori
  const kategoriItems = document.querySelectorAll('.kategori-item');

  kategoriItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault(); // mencegah reload halaman
      const kategori = item.getAttribute('data-kategori');
      console.log("Kategori dipilih:", kategori);
      
      // Tambahkan logika filter produk di sini
      // Contoh:
      // tampilkan hanya produk dengan kelas sesuai kategori
      const produkList = document.querySelectorAll('.produk'); 
      produkList.forEach(produk => {
        if(kategori === 'semua' || produk.dataset.kategori === kategori) {
          produk.style.display = 'block';
        } else {
          produk.style.display = 'none';
        }
      });
    });
  });

});


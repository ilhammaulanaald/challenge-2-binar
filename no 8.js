// SOAL 8 DATA PENJUALAN BUKU
const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
      },
      {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
      },
      {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
      },
      {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
      },
    ];

    function getInfoPenjualan(dataPenjualan) {
        
        let untung = dataPenjualan.map(data => (data.hargaJual - data.hargaBeli) * data.totalTerjual).reduce((prev, curr) => prev + curr, 0);
        let totalKeuntungan = 'Rp. ' +  new Intl.NumberFormat('de-DE').format(untung);
        let modal = dataPenjualan.map(data => (data.sisaStok + data.totalTerjual) * data.hargaBeli).reduce((prev, curr) => prev + curr, 0);
        let totalModal = 'Rp. ' +  new Intl.NumberFormat('de-DE').format(modal);
        let persenUntung = untung / modal * 100;
        let presentaseKeuntungan = persenUntung.toFixed(2) + '%';
        let novelTerjual = dataPenjualan.map(data => data.totalTerjual);
        let penjualanTerbanyak = Math.max(...novelTerjual);
        let produkBukuTerlaris = dataPenjualan.filter((data) => data.totalTerjual == penjualanTerbanyak).map(data => data.namaProduk).toString();
        let penulisTerlaris = dataPenjualan.filter((data) => data.totalTerjual == penjualanTerbanyak).map(data => data.penulis).toString();
        
        let hasilNovel = { totalKeuntungan, totalModal, presentaseKeuntungan, produkBukuTerlaris, penulisTerlaris};

        return hasilNovel
    
    }
    console.log(getInfoPenjualan(dataPenjualanNovel));
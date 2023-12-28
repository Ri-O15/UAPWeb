let isiData = [
    {kode : "001", barang : "Barang A", harga : 10000 },
    {kode : "002", barang : "Barang B", harga : 20000 },
    {kode : "003", barang : "Barang C", harga : 30000 }
]
function barangCari(kode){
    for (let i=0;i<isiData.length;i++){
        if (isiData[i].kode === kode){
        return isiData[i];
        }
}
return null;
}

function proses(){
    let kode = document.getElementById("kode").value;
    let banyak = parseInt(document.getElementById("banyak").value);
    let dataBarang = barangCari(kode);

    if(!dataBarang){
        alert("Data tidak ditemukan");
    }
    
    let hasil = dataBarang.harga * banyak;

    alert("Total Pembayaran adalah " + hasil);

    let user = parseInt(prompt("Masukkan Uang User"))

    let bayar = user - hasil;

    if(bayar < 0){
        alert("Jadi Hutang " + bayar)
    }else{
        alert("Total Kembalian anda adalah " + bayar);
    }

}

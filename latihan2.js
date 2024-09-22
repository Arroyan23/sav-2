// 1. buatkan objek dari cafenya terlebih dahulu

function CafeShop(namaCafe, namaPengunjung, pendapatan) {
  this.namaCafe = namaCafe;
  this.namaPengunjung = namaPengunjung;
  this.pendapatan = pendapatan;

  this.pengunjungDatang = function (namaPengunjung) {
    this.namaPengunjung.push(namaPengunjung);
    return this;
  };

  this.pengunjungBerkurang = function (namaPengunjung, uangDibayar) {
    if (this.namaPengunjung.length == 0) {
      alert("tidak ada pengunjung di dalam cafe ini");
    }

    for (var i = 0; i < this.namaPengunjung.length; i++) {
      if (this.namaPengunjung[i] == namaPengunjung) {
        this.namaPengunjung[i] = undefined;
        this.pendapatan += uangDibayar;
      }
    }
  };
}

// 2. masukkan objek ke dalam 2 variabel
// variabel pertama = cafe 1
var cafe1 = new CafeShop("bobby cafe", [], 0);

// variabel kedua = cafe 2
var cafe2 = new CafeShop("jack daniels", [], 0);
// dengan catatan di tiap variabel ada array yang berisi nama nama pengunjung
alert("selamat datang di cafe management");
// buat function untuk menambahkan pengunjung pada array yang berisi nama pengunjung
// dan juga mengurangi pengunjung disertakan dengan taguhannya
// sehingga pendapatan dari cafe tersebut bertambah
var tanyaCafe = prompt("cafe mana yang ingin anda urus");
// lakukan pengulangan pada program ini

if (tanyaCafe == 1) {
  tanyaCafe = cafe1;
} else if (tanyaCafe == 2) {
  tanyaCafe = cafe2;
} else {
  alert("cafe yang anda masukkan tidak ada dalam data");
}
var recursion = true;

while (recursion) {
  var tanyaNamaPengunjung = prompt("Masukkan nama pengunjung dalam cafe ini");

  tanyaCafe.pengunjungDatang(tanyaNamaPengunjung);

  recursion = confirm("apakah anda ingin menambahkan nama pengunjung lagi?");
}

while (recursion) {
  var tanyaPengunjungBerkurang = prompt(
    "sebutkan nama pengunjung yang ingin keluar dari cafe"
  );
}

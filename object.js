// 1. object dapat berfungsi lebih sakti daripada array

// 1. membuat object literal
var mahasiswa = {
  nama: "rei jawir",
  nrp: "123457",
  email: "jawirs@gmail.com",
  jurusan: "teknik jomok",
};

var mahasiswa2 = {
  nama: "razan",
  nrp: "134656",
  email: "jomoks@gmail.com",
  jurusan: "jomokers",
};

// 2. dengan function declaration

function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa(
  "nofariza",
  "1234633",
  "jomokers@gmail.com",
  "jomoks paling jomoks"
);

// 3. menggunakan constructor
// khusus untuk membuat object
// biasanya konstruktor menggunakan kapital di awal huruf

function Mahasiwa(nama, nrp, email, jurusan, kelincahan) {
  // var this = {}
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
  // return this
  // sehingga sudah merepresentasikan yang ada pada
  // program tersebut
}

// jika menggunakan function constructer maka lebih mudah digunakan

var mhs4 = new Mahasiwa("reis", "12345", "reis@gmail.com", "atam");
console.log(mhs4);

// this mengembalikan objek global
alert(mhs4);

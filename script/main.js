let computePrice = () => {
  let jumlahKaryawan = document.getElementById("jumlah-karyawan").value;
  let harga = 12500;

  //12 bulan
  let twelve = document.getElementById("twelve");
  let twelveCount =
    jumlahKaryawan * harga * 12 - (jumlahKaryawan * harga * 12 * 5) / 100;
  twelve.innerHTML = numberWithDot(twelveCount);

  //6 bulan
  let six = document.getElementById("six");
  let sixCount =
    jumlahKaryawan * harga * 6 - (jumlahKaryawan * harga * 6 * 3) / 100;
  six.innerHTML = numberWithDot(sixCount);

  //3 bulan
  let three = document.getElementById("three");
  let threeCount =
    jumlahKaryawan * harga * 3 - (jumlahKaryawan * harga * 3 * 2) / 100;
  three.innerHTML = numberWithDot(threeCount);

  //3 bulan
  let one = document.getElementById("one");
  let oneCount = jumlahKaryawan * harga;
  one.innerHTML = numberWithDot(oneCount);
};

const numberWithDot = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

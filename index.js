document.querySelector(".btn-dark").onclick = function () {
  // hành động
  var luongMotNgay = document.getElementById("luongMotNgay").value * 1;
  var soNgayLam = document.getElementById("soNgayLam").value * 1;
  var tienLuong = 0;
  tienLuong = luongMotNgay * soNgayLam;
  console.log(tienLuong);
  // toLocaleString format lại định dạng number thành tiền tệ
  document.querySelector(
    ".ketQua"
  ).innerHTML = `Tính Lương: ${tienLuong.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}`;
};

// TÍNH ĐIỂM TRUNG BÌNH
// var btnTrungBinhCong =
document.querySelector(".btn-success").onclick = function () {
  // hành động
  var numberOne = document.getElementById("numberOne").value * 1;
  var numberTwo = document.getElementById("numberTwo").value * 1;
  var numberThree = document.getElementById("numberThree").value * 1;
  var numberFour = document.getElementById("numberFour").value * 1;
  var numberFive = document.getElementById("numberFive").value * 1;
  var tinhDiemTrungBinh = 0;
  tinhDiemTrungBinh =
    (numberOne + numberTwo + numberThree + numberFour + numberFive) / 5;
  console.log(tinhDiemTrungBinh);
  document.querySelector(
    ".ketQuaTrungBinh"
  ).innerHTML = `Số Trung Bình: ${tinhDiemTrungBinh}`;
};

// bài tập quy đổi tiền
document.querySelector(".btn-danger").onclick = function () {
  // hành động
  var soTien = document.getElementById("soTien").value * 1;
  const USD = 23500;
  var quyDoiTien = 0;
  quyDoiTien = soTien * USD;
  console.log(quyDoiTien);
  // toLocaleString format lại định dạng number thành tiền tệ
  document.querySelector(
    ".ketQuaDoiTien"
  ).innerHTML = ` Số Tiền đã đổi: ${quyDoiTien.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}`;
};

// bài tập Tính diện tích, chu vi hình chữ nhật
document.querySelector(".btn-primary").onclick = function () {
  //hành động
var chieuDai = document.getElementById("chieuDai").value * 1;
var chieuRong = document.getElementById("chieuRong").value * 1;
var dienTich = 0;
var chuVi = 0;

 dienTich = chieuDai * chieuRong ;
 console.log(dienTich);

 chuVi = (chieuDai + chieuRong) * 2 ;
 console.log(chuVi);
 
 document.querySelector(
  ".ketQuaTinhDienTichChuVi",
  
).innerHTML = `Tổng diện tích:  ${dienTich} ; Tổng chu vi:
${chuVi}`;

};
 

// Bài tập tính tổng 2 ký số


document.querySelector("#btnkiSo").onclick = function () {
  var nhapSo = document.getElementById('nhapSo').value * 1;

  var hangChuc = Math.floor(nhapSo / 10);
  var donVi = nhapSo % 10;
  var tongkiSo = 0;
  // progress: xử lý 
tongkiSo = hangChuc + donVi;
console.log(tongkiSo);

document.querySelector(".ketQuaTinhTongKiSo").innerHTML = `Tổng 2 ký số là: ${tongkiSo}`;
};
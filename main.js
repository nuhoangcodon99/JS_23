//Bài tập 1 tính lương nv
function tinhLuong() {
    var soTien = document.getElementById("luongTrenNgay").value * 1;
    var soNgay = document.getElementById("soNgay").value * 1;
    let Luong = soTien * soNgay;
    document.getElementById("inKetQua1").innerHTML = `Số lương: ${Luong}`;
    document.getElementById("inKetQua1").classList.remove("bg-transparent");
    document.getElementById("inKetQua1").classList.add("bg-info");
}
document.getElementById("tinhTien").onclick = tinhLuong;

//Bài tập 2 tính giá trị trung bình cộng từ 5 số
function tinhTrungBinh() {
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    var so4 = document.getElementById("so4").value * 1;
    var so5 = document.getElementById("so5").value * 1;
    let TB = (so1 + so2 + so3 + so4 + so5) / 5;
    document.getElementById("inKetQua2").innerHTML = `Số trung bình: ${TB}`;
    document.getElementById("inKetQua2").classList.remove("bg-transparent");
    document.getElementById("inKetQua2").classList.add("bg-danger");
}
document.getElementById("tinhTrungBinh").onclick = tinhTrungBinh;

//Bài tập 3 quy đổi tiền
function quyDoi() {
    var soUSD = document.getElementById("soUSD").value * 1;
    let soTien = soUSD * 23500;
    soTien = Intl.NumberFormat("vi-VN").format(soTien);
    document.getElementById("inKetQua3").innerHTML = `Số tiền: ${soTien} VND`;
    document.getElementById("inKetQua3").classList.remove("bg-transparent");
    document.getElementById("inKetQua3").classList.add("bg-warning");
}
document.getElementById("quyDoi").onclick = quyDoi;

//Bài tập 4 tính chu vi và diện tích hình chữ nhật
function hinhChuNhat() {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    let chuVi = (chieuDai + chieuRong) * 2;
    let dienTich = chieuDai * chieuRong;

    document.getElementById(
        "inKetQua4"
    ).innerHTML = `Chu vi: ${chuVi}  || Diện tích: ${dienTich}`;
    document.getElementById("inKetQua4").classList.remove("bg-transparent");
    document.getElementById("inKetQua4").classList.add("bg-success");
}
document.getElementById("hinhChuNhat").onclick = hinhChuNhat;

//Bài tập 5 tính tổng kí số từ số có hai chữ số
function tongKySo() {
    let chuc = 0;
    let dv = 0;
    var soN = document.getElementById("so2ChuSo").value * 1;
    chuc = soN / 10;
    chuc = Math.floor(chuc);
    dv = soN % 10;
    let tong = chuc + dv;
    document.getElementById(
        "inKetQua5"
    ).innerHTML = `Tổng 2 kí số của ${soN} là : ${tong}`;
    document.getElementById("inKetQua5").classList.remove("bg-transparent");
    document.getElementById("inKetQua5").classList.add("bg-primary");
}

document.getElementById("tinhTong").onclick = tongKySo;

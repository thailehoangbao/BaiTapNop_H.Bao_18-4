// Bài Tập 1
document.getElementById('btnDiemThi').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var khuVuc = document.getElementById('khuVuc').value * 1;
    var doiTuong = document.getElementById('doiTuong').value * 1;
    var diemMon1 = document.getElementById('diemMon1').value * 1;
    var diemMon2 = document.getElementById('diemMon2').value * 1;
    var diemMon3 = document.getElementById('diemMon3').value * 1;
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    if (diemChuan > 30) {
        alert('Bạn Nhập Sai Điểm chuẩn vui lòng nhập lại !')
    };
    if (
        diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0
    ) {
        var result1 = 'Bạn đã rớt !!!';
        document.getElementById('result1').innerHTML = result1;
    } else if (
        tongDiem < diemChuan
    ) {
        var result1 = 'Bạn đã rớt !!! Tổng điểm bạn là : ' + tongDiem;
        document.getElementById('result1').innerHTML = result1;
    } else {
        var result1 = 'Bạn đã đậu !!! Chúc mừng bạn với điểm là : ' + tongDiem;
        document.getElementById('result1').innerHTML = result1;
    };
};
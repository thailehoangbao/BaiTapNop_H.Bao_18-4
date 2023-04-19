// Bài Tập 1
document.getElementById('btnDiemThi').onclick = function () {
    /**
     * Input : Lấy giá trị nhập từ người dùng Điểm Chuẩn, Khu Vực , Đối Tượng , Điểm môn thi 1,2,3
     */
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var khuVuc = document.getElementById('khuVuc').value * 1;
    var doiTuong = document.getElementById('doiTuong').value * 1;
    var diemMon1 = document.getElementById('diemMon1').value * 1;
    var diemMon2 = document.getElementById('diemMon2').value * 1;
    var diemMon3 = document.getElementById('diemMon3').value * 1;
    // Tính tổng điểm thi 
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    /**
     * Process :
     * Kiểm tra nhập điểm chuẩn <= 30 xuất thông báo!
     */
    if (diemChuan > 30) {
        alert('Bạn Nhập Sai Điểm chuẩn vui lòng nhập lại !')
    };
    /**
     * Xét điều kiện nếu có 1 trong 3 môn có điểm = 0 xuất ra thi rớt.
     */
    if (
        diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0
    ) {
        var result1 = 'Bạn đã rớt !!!';
        document.getElementById('result1').innerHTML = result1;
    } else if (
    /**
     * Xét tổng điểm < điểm chuẩn => Output : thi rớt
     */
        tongDiem < diemChuan
    ) {
        var result1 = 'Bạn đã rớt !!! Tổng điểm bạn là : ' + tongDiem;
        document.getElementById('result1').innerHTML = result1;
    /**
     * Tổng điểm > điểm chuẩn => OutPut : thi đậu
     */
    } else {
        var result1 = 'Bạn đã đậu !!! Chúc mừng bạn với điểm là : ' + tongDiem;
        document.getElementById('result1').innerHTML = result1;
    };
};

// Bài Tập 2

document.getElementById('btnTinhTienDien').onclick = function () {
    /**
     * InPut : Lấy giá trị họ tên , số kw , gán hệ số kw vào mảng
     */
    var hoTen = document.getElementById('hoTen').value;
    var soKw = document.getElementById('soKw').value * 1;
    var arrayKw = [500, 650, 850, 1100, 1300];
    var result = 0;
    /**
     * Process : Xét số Kw > 0 , sai xuất thông báo 
     */
    if (soKw < 0) {
        alert('Nhập sai số Kw, Vui lòng nhập lại.');
    };
    /**
     * Số Kw * hesoKw tương ứng ra kết quả gán vào biến result
     * Dựa vào khung đề bài để xét hesoKw tương ứng với Kw sử dụng
     */

    /**
     * Out Put : Họ và Tên + Tiền Điện
     */
    if (
        soKw <= 50 & soKw > 0
    ) {
        result = arrayKw[0] * soKw;
        document.getElementById('result2').innerHTML = "Họ & Tên : " + hoTen + " - Số Tiền Điện : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else if (
        soKw > 50 & soKw <= 100
    ) {
        result = arrayKw[1] * soKw;
        document.getElementById('result2').innerHTML = "Họ & Tên : " + hoTen + " - Số Tiền Điện : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else if (
        (soKw > 100) & (soKw <= 150)
    ) {
        result = arrayKw[2] * soKw;
        document.getElementById('result2').innerHTML = "Họ & Tên : " + hoTen + " - Số Tiền Điện : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else if (
        150 < soKw & soKw <= 200
    ) {
        result = arrayKw[3] * soKw;
        document.getElementById('result2').innerHTML = "Họ & Tên : " + hoTen + " - Số Tiền Điện : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else {
        result = arrayKw[4] * soKw;
        document.getElementById('result2').innerHTML = "Họ & Tên : " + hoTen + " - Số Tiền Điện : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
};

// Bài Tập 3 
document.getElementById('btnTinhThue').onclick = function () {
    /**
     * Input : lấy các giá trị từ người dùng - hovaten, tongthunhapnam, soNguoiPhuThuoc, 
     * mảng thuế suất gán cho arrayThueSuat 
     */
    var hoVaTen = document.getElementById('hoVaTen').value;
    var tongThuNhapNam = document.getElementById('tongThuNhapNam').value * 1;
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value * 1;
    var arrayThueSuat = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35];
    // Tính thu nhập chịu thuế theo công thức đề cho
    var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
    var result = 0;
    /**
     * Process : xét điều kiện tongThuNhapNam < 7.000.000 => nhập sai
     */
    if (
        tongThuNhapNam <= 7000000
    ) {
        alert('Nhập sai!')
    };
    /**
     * Xét thu nhập chịu thuế theo khung tương ứng của bảng
     * Thu Nhập Chịu Thuế * thuế suất  = Thuế Phải Đóng
     * Thu Nhập Chịu Thuế tương ứng với từng thuế suất theo bảng
     */

    /**
     * Output 
     * Xuất thu nhập chịu thuế tương ứng với họ tên
     */
    if (
        thuNhapChiuThue <= 60000000
    ) {
        result = arrayThueSuat[0] * thuNhapChiuThue;
        document.getElementById('result3').innerHTML = "Họ & Tên : " + hoVaTen + " - Thuế Thu Nhập Phải Trả : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else if (
        (thuNhapChiuThue > 60000000) & (thuNhapChiuThue <= 120000000)
    ) {
        result = arrayThueSuat[0] * 60000000 + arrayThueSuat[1] * (thuNhapChiuThue - 60000000);
        document.getElementById('result3').innerHTML = "Họ & Tên : " + hoVaTen + " - Thuế Thu Nhập Phải Trả : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else if (
        (thuNhapChiuThue > 120000000) & (thuNhapChiuThue <= 210000000)
    ) {
        result = (arrayThueSuat[0] + arrayThueSuat[1]) * 60000000 + arrayThueSuat[2] * (thuNhapChiuThue - 120000000);
        document.getElementById('result3').innerHTML = "Họ & Tên : " + hoVaTen + " - Thuế Thu Nhập Phải Trả : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else if (
        (thuNhapChiuThue > 210000000) & (thuNhapChiuThue <= 384000000)
    ) {
        result = (arrayThueSuat[0] + arrayThueSuat[1]) * 60000000 + arrayThueSuat[2] * 90000000 + + arrayThueSuat[3] * (thuNhapChiuThue - 210000000);
        document.getElementById('result3').innerHTML = "Họ & Tên : " + hoVaTen + " - Thuế Thu Nhập Phải Trả : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else if (
        (thuNhapChiuThue > 384000000) & (thuNhapChiuThue <= 624000000)
    ) {
        result = (arrayThueSuat[0] + arrayThueSuat[1]) * 60000000 + arrayThueSuat[2] * 90000000 + arrayThueSuat[3] * 174000000 + arrayThueSuat[4] * (thuNhapChiuThue - 384000000);
        document.getElementById('result3').innerHTML = "Họ & Tên : " + hoVaTen + " - Thuế Thu Nhập Phải Trả : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else if (
        (thuNhapChiuThue > 624000000) & (thuNhapChiuThue <= 960000000)
    ) {
        result = (arrayThueSuat[0] + arrayThueSuat[1]) * 60000000 + arrayThueSuat[2] * 90000000 + arrayThueSuat[3] * 174000000 + arrayThueSuat[4] * 240000000 + arrayThueSuat[5] * (thuNhapChiuThue - 624000000);
        document.getElementById('result3').innerHTML = "Họ & Tên : " + hoVaTen + " - Thuế Thu Nhập Phải Trả : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    } else {
        var result = (arrayThueSuat[0] + arrayThueSuat[1]) * 60000000 + arrayThueSuat[2] * 90000000 + arrayThueSuat[3] * 174000000 + arrayThueSuat[4] * 240000000 + arrayThueSuat[5] * 336000000 + arrayThueSuat[6] * (thuNhapChiuThue - 960000000);
        document.getElementById('result3').innerHTML = "Họ & Tên : " + hoVaTen + " - Thuế Thu Nhập Phải Trả : " + result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
};


// Bài 4 
/**
 * Process
 * Dùng hàm onchange để click vào giá trị Cá nhân và Chọn loại khách hàng
 * Sẽ ẩn số kế nối
 * Click vào Doanh nghiệp hiện kết nối
 */
document.getElementById('showKenh').style.display = 'none';
function myFunction() {
    var mySelect = document.getElementById('mySelect').value * 1;
    if (
        mySelect == 1 || mySelect == 0
    ) {
        document.getElementById('showKenh').style.display = 'none';
    } else {
        document.getElementById('showKenh').style.display = 'block';
    };
};

/**
 * Input : Lấy giá trị số kết nối, số kênh cao cấp, Mã Khách hàng, chọn loại khách hàng
 */
document.getElementById('btnTinhTienCap').onclick = function () {
    var mySelect = document.getElementById('mySelect').value * 1;
    var maKhachHang = document.getElementById('maKhachHang').value;
    var soKenhCaoCap = document.getElementById('soKenhCaoCap').value * 1;
    var soKetNoi = document.getElementById('soKetNoi').value * 1;
    if (
        // Xử lý nếu KH không chọn loại KH yêu cầu chọn.
        mySelect == 0
    ) {
        alert('Vui Lòng Chọn Loại Khách Hàng !');
    } else if (
        // Khách hàng chọn loại KH cá nhân
        mySelect == 1
    ) {
        var phiHoaDon = 4.5;
        var phiDV = 20.5;
        var kenhCaoCap = 7.5;
        /**
         * Tính tiền Cáp Cá nhân theo công thức 
         * Gán vào biến output xuất ra giá trị mã KH và Tiền Cáp
         */
        var result = soKenhCaoCap * kenhCaoCap + phiDV + phiHoaDon;
        document.getElementById('result4').innerHTML = 'Khách hàng : ' + maKhachHang + ' Phí Cáp : $' + result;
    } else {
        /**
         * Tính tiền Cáp Doanh Nghiệp theo công thức 
         * Gán vào biến output xuất ra giá trị mã KH và Tiền Cáp
         */
        var phiHoaDon = 15;
        var phiDV = 75;
        var kenhCaoCap = 50;
        if (
            soKetNoi <= 10
        ) {
            var result = soKenhCaoCap * kenhCaoCap + phiDV + phiHoaDon;
            document.getElementById('result4').innerHTML = 'Khách hàng : ' + maKhachHang + ' Phí Cáp : $' + result;
        } else {
            var result = soKenhCaoCap * kenhCaoCap + ( soKetNoi - 10 )*5 + phiDV + phiHoaDon;
            document.getElementById('result4').innerHTML = 'Khách hàng : ' + maKhachHang + ' Phí Cáp : $' + result;
        };
    };
};


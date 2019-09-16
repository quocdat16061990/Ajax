function DanhSachNguoiDung(){
  // danh sach
  this.layDanhSachNguoiDung=function(){
    return $.ajax({
      url:"http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
      type :"GET"
    });
  };
  this.themNguoiDung=function(nguoiDung){
    return $.ajax({
      url:"http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
      type :"POST",
      data:nguoiDung
    })
  }
  // /* Xoa nguoi dung */
 DanhSachNguoiDung.prototype.xoaNguoiDung = function(id) {
   return $.ajax({
     url: `http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung2/${id}`,
     type: "DELETE"
   });
 };
 
 /* lấy thông tin người dùng */
 DanhSachNguoiDung.prototype.layThongTinNguoiDung = function(id) {
  return $.ajax({
     url: `http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung2/${id}`,
     type: "GET"
  });
 };

}

// function DanhSachNguoiDung() {
//   /* Lây danh sách nguời dùng */
//   this.layDanhSachNguoiDung = function() {
//     return $.ajax({
//       url: "http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung2",
//       type: "GET"
//     });
//   };

//   /* Thêm người dùng */
//   this.themNguoiDung = function(nguoiDung) {
//     return $.ajax({
//       url: "http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung2",
//       type: "POST",
//       data: nguoiDung
//     });
//   };
// }

// /* Xoa nguoi dung */
// DanhSachNguoiDung.prototype.xoaNguoiDung = function(id) {
//   return $.ajax({
//     url: `http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung2/${id}`,
//     type: "DELETE"
//   });
// };

// /* lấy thông tin người dùng */
// DanhSachNguoiDung.prototype.layThongTinNguoiDung = function(id) {
//   return $.ajax({
//     url: `http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung2/${id}`,
//     type: "GET"
//   });
// };

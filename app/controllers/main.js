$(document).ready(function(){
  var danhSachNguoiDung=new DanhSachNguoiDung();
  getListUser();
  function getListUser(){
    danhSachNguoiDung.layDanhSachNguoiDung()
      .done(function(result){
        taoBang(result);
      })
      .fail(function(error){
        console.log(error);
      });
  }

  $("#btnThemNguoiDung").clicl(function(){
    $("..modal-title").html("Them Nguoi Dung");
    var footer=`<button id="btnThem" class="btn btn-success">Them</button>`;
    $(".modal-footer").html(footer);
  });


/*Chuc nang Them*/
$("body").delegate("#btnThem","click",function(){
    var taiKhoan=$("#TaiKhoan").val();
    var hoTen=$("#Hoten").val();
    var matKhau=$("#MatKhau").val();
    var email=$("#Email").val();
    var soDT=$("#SoDienThoai").val();
    var maLoaiNguoiDung=$("#loaiNguoiDung").val();
    var nguoiDung=new NguoiDung(
      taiKhoan,matKhau,hoTen,email,soDT,maLoaiNguoiDung
    );
    danhSachNguoiDung.themNguoiDung(nguoiDung)
      .done(function(result){
        getListUser();
      })
      .fail(function(err){
        console.log(err);
      });
}) ;
/*Chuc nang xoa*/
$("body").delegate("btnXoa","click",function(){
    var id=$(this).data("id");
    danhSachNguoiDung.xoaNguoiDung(id)
    .done(function(result){
      getListUser();
    })
    .fail(function(err){
      console.log(err);
    })
}) 
/*Lay thong tin nguoi dung*/
$("body").delegate("btnSua","click",function(){
  $(".modal-title").html("Sua nguoi dung");
  var footer=`
    <button id="btnCapNhat" class="btn btn-success">Cap nhat</button>
  `;
  $(".modal-footer").html(footer);
  var id=$(this).data("id");
  danhSachNguoiDung.layThongTinNguoiDung(id)
  .done(function(result){
    $("#TaiKhoan").val(result.taiKhoan);
         $("#HoTen").val(result.hoTen);
             $("#MatKhau").val(result.matKhau);
             $("#Email").val(result.email);
             $("#SoDienThoai").val(result.soDT);
             $("#loaiNguoiDung").val(result.maLoaiNguoiDung);
  })
  .fail(function(err) {
             console.log(err);
          });
}) ;

  function taoBang(mang){
    var content="";
    mang.map(function(iten,index){
        content+=`
        <tr>
          <td>(index+1)</td>
          <td>${item.taiKhoan}</td>
                            <td>${item.matKhau}</td>
                             <td>${item.hoTen}</td>
                            <td>${item.email}</td>
                             <td>${item.soDT}</td>
                           <td>${item.maLoaiNguoiDung}</td>
                             <td>
                              <button class="btnSua btn btn-info" data-toggle="modal" data-target="#myModal" data-id="${
                                item.id
                                }">Sửa</button>
                                <button class="btnXoa btn btn-danger" data-id="${
                                  item.id
                               }">Xóa</button>
                            </td>
        </tr>  
        `
    });
    $("#tblDanhSachNguoiDung").html(content);
  }

});  


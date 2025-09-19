const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = function (event) {
  event.preventDefault();

  const math = parseFloat(document.getElementById("math").value);
  const physics = parseFloat(document.getElementById("physics").value);
  const chemistry = parseFloat(document.getElementById("chemistry").value);
  const kvut = document.getElementById("kvut").value;
  const dtut = document.getElementById("dtut").value * 1;


  console.log(math, physics, chemistry, kvut, dtut);

  let content = tinhDiem(math, physics, chemistry, kvut, dtut);

  const show_Result1 = document.getElementById("Show_Result1");

  show_Result1.innerHTML = content;
};

const tinhDiem = (math, physics, chemistry, kvut, dtut) => {
  let tbDiem = (math + physics + chemistry) / 3;
  let diemkvut = 0;
  let diemdtut = 0;
  let content = "";
  let result = "";
  if (math == 0 || physics == 0 || chemistry == 0) {
    content = `<h1>Tổng điểm của bạn:</h1>
     <p>Điểm thi 3 môn Toán, Lý, Hóa lần lượt là: ${math}, ${physics}, ${chemistry}</p>
        <p>Bạn đã rớt vì bị điểm liệt, trong 3 môn bạn đã có môn bị 0 điểm</p>`;
    return content;
  }
  if (kvut.toUpperCase() == "A" || kvut == "a") {
    tbDiem += 2;
    diemkvut += 2;
  } else if (kvut.toUpperCase() == "B" || kvut == "b") {
    tbDiem += 1;
    diemkvut += 1;
  } else if (kvut.toUpperCase() == "C" || kvut == "c") {
    tbDiem += 0.5;
    diemkvut += 0.5;
  } else {
    tbDiem += 0;
  }

  if (dtut == 1) {
    tbDiem += 2.5;
    diemdtut += 2.5;
  } else if (dtut == 2) {
    tbDiem += 1.5;
    diemdtut += 1.5;
  } else if (dtut == 3) {
    tbDiem += 1;
    diemdtut += 1;
  } else {
    tbDiem += 0;
  }

  if (tbDiem >= 7) {
    result = "Bạn đã vượt qua kỳ thi !!";
  } else {
    result = "Bạn đã trượt kỳ thi !!";
  }
  content = `<h1>Tổng điểm của bạn:</h1>
     <p>Điểm thi 3 môn Toán, Lý, Hóa lần lượt là: ${math}, ${physics}, ${chemistry}</p>
     <p>Điểm đối tượng ưu tiên: ${diemdtut}</p>
     <p>Điểm khu vực ưu tiên: ${diemkvut}</p>
     <p>Tổng điểm: (<b> ${tbDiem}</b>/10) ${result} </p>
    `;
  return content;
};

// Bài 2 Tính tiền điện
const btnSubmit1 = document.getElementById("btnSubmit1");
btnSubmit1.onclick = function(event){
   event.preventDefault();

    const hoTen = document.getElementById("name").value;
    const kw = document.getElementById("kwDien").value*1;

    let tongTien=0;

    if(kw >0 && kw<=50){
        tongTien = kw *500;
    }else if(kw>50 && kw <=100){
        tongTien = 50 *500 + (kw-50)*650;
    }else if(kw>100 && kw<=200){
        tongTien= 50* 500 + 50*650 + (kw-100) * 850;
    }else if(kw >200 && kw<=350){
        tongTien = 50*500 + 50*650 + 100 *850 + (kw -200)*1100;
    }else{
        tongTien = 50*500 + 50*650 + 100 *850 + 150 *1100+ (kw-450)*1300;
    }
    console.log(tongTien);
    const show_Result2 = document.getElementById("Show_Result2");
    show_Result2.innerHTML = `<p>${hoTen}: ${tongTien} vnd</p>`
}

// Bài 3 Tính thuế
const btnSubmit2 = document.getElementById("btnSubmit2");
btnSubmit2.onclick = function(event){
  event.preventDefault();
  const name = document.getElementById("name1").value;
  const tongThu = document.getElementById("tongThu").value*1;
  const people = document.getElementById("people").value*1;

  let tienThue=0;

  let thuNhapChiuThue= tongThu-4000000-people*1600000;
  if(thuNhapChiuThue<0 && thuNhapChiuThue<=60000000){
    tienThue=thuNhapChiuThue*0.05;
  }else if(thuNhapChiuThue>60000000 && thuNhapChiuThue<=120000000){
    tienThue = 60000000*0.05 + (thuNhapChiuThue-60000000)*0.1;
  }else if(thuNhapChiuThue>120000000 && thuNhapChiuThue<=210000000){
    tienThue = 60000000*0.05 + 60000000 *0.1 + (thuNhapChiuThue-120000000)*0.15; 
  }else if(thuNhapChiuThue>210000000 && thuNhapChiuThue<=384000000){
     tienThue = 60000000*0.05 + 60000000 *0.1 + 90000000*0.15 + (thuNhapChiuThue-210000000)*0.2; 
  }else if(thuNhapChiuThue>384000000 && thuNhapChiuThue<=624000000){
      tienThue = 60000000*0.05 + 60000000 *0.1 + 90000000*0.15 + 174000000*0.2 + (thuNhapChiuThue-384000000)*0.25; 
  }else if(thuNhapChiuThue>624000000 && thuNhapChiuThue<=960000000){
      tienThue = 60000000*0.05 + 60000000 *0.1 + 90000000*0.15 + 174000000*0.2 + 240000000*0.25 + (thuNhapChiuThue-624000000)*0.3; 
  }else{
     tienThue = 60000000*0.05 + 60000000 *0.1 + 90000000*0.15 + 174000000*0.2 + 240000000*0.25 + 336000000*0.3+(thuNhapChiuThue-624000000)*0.35; 
  }

  let content = `<p>Tiền thuế của ${name} với tổng thu nhập chịu thuế là: ${thuNhapChiuThue} và tiền thuế là: ${tienThue}</p>`
  const Show_Result3 = document.getElementById("Show_Result3");
  Show_Result3.innerHTML = content ;

}

// Bài 4: Tính tiền cáp
document.getElementById("loaiKH").addEventListener("change", function () {
  const loai = this.value;
  const ketNoiDiv = document.getElementById("soKetNoiDiv");
  if (loai === "DN") {
    ketNoiDiv.style.display = "block"; // hiện ô nhập số kết nối
  } else {
    ketNoiDiv.style.display = "none"; // ẩn đi nếu chọn nhà dân
  }
});

document.getElementById("formCable").addEventListener("submit", function (e) {
  e.preventDefault();

  const maKH = document.getElementById("maKH").value;
  const loaiKH = document.getElementById("loaiKH").value;
  const soKenh = Number(document.getElementById("soKenh").value);
  const soKetNoi =
    loaiKH === "DN" ? Number(document.getElementById("soKetNoi").value) : 0;

  let tongTien = 0;

  if (loaiKH === "ND") {
    // Nhà dân
    tongTien = 4.5 + 20.5 + soKenh * 7.5;
  } else if (loaiKH === "DN") {
    // Doanh nghiệp
    tongTien = 15 + 75 + soKenh * 50;
    if (soKetNoi > 10) {
      tongTien += (soKetNoi - 10) * 5; // cộng thêm nếu >10 kết nối
    }
  } else {
    alert("Vui lòng chọn loại khách hàng!");
    return;
  }

  document.getElementById(
    "Show_Result4"
  ).innerText = `Mã KH: ${maKH} | Tổng tiền cáp: $${tongTien.toFixed(2)}`;
});

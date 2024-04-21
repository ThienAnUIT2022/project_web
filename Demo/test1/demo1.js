$(document).ready(function() {
    // Ẩn tất cả nội dung tab ban đầu
    $('.tab-content-item').hide();
  
    // Xử lý sự kiện click vào mục lục
    $('.nav-tabs li').click(function() {
      // Xóa class 'active' khỏi tất cả mục lục
      $('.nav-tabs li').removeClass('active');
  
      // Thêm class 'active' vào mục lục được click để đánh dấu
      $(this).addClass('active');
  
      // Lấy ID của nội dung tab cần hiển thị (từ 'href' của thẻ a con)
      let id_tab_content = $(this).children('a').attr('href');
  
      // Ẩn tất cả nội dung tab khác
      $('.tab-content-item').hide();
  
      // Hiển thị nội dung tab tương ứng với tab được click
      $(id_tab_content).fadeIn();
  
      // Ngăn chặn hành vi click mặc định (tùy chọn)
      return false;
    });  

    $("button.btn").click(function(){
    //Tạo sự kiện click chuột vào button có class là btn
        if ($(this).attr("id") === "btn1"){
        // Kiểm tra xem ID nút được click có phải là "btn1" hay không
            $.ajax({
                url: "tag1.txt", 
                //Dùng url để lấy thông tin là tag1.txt
                success: function(result){
                // result chứa nội dung được trả về từ máy chủ
                    $("#div1").html(result);
                    //Dùng hàm html để thay vào nội dung của id div1 bằng nội dung của result
            }});
        }
        else if ($(this).attr("id") === "btn2"){
            $.ajax({
                url: "tag2.txt", 
                success: function(result){
                $("#div2").html(result);
            }});
        }
        else if ($(this).attr("id") === "btn3"){
            $.ajax({
                url: "tag3.txt", 
                success: function(result){
                $("#div3").html(result);
            }});
        }
        else if ($(this).attr("id") === "btn4"){
            $.ajax({
                url: "tag4.txt", 
                success: function(result){
                $("#div4").html(result);
            }});
        }
    });
});
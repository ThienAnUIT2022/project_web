$(document).ready(function() {
    //Xử lý sự kiện khi click vào nút submit
    $('#submit').click(function(event) {
        //Chặn các event mặc định
        event.preventDefault();
        //Tạo biến name
        var name = $('[name="name"]').val();
        //Kiểm tra tính hợp lệ của tên.
        if (name == "") {
            alert("Please enter your name!");
            return false;
        } else {
            $.ajax({
                url: "./demo-result.html",
                dataType: "html",
                success: function(result) {
                    $("body").html(result);
                    return true;
                },
                error: function() {
                    alert('error');
                    return false;
                }
            });
        }
    });
});
  
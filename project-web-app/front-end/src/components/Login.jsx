import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
// import '../assets/jss/popup.css';

  const Login = ({ onLoginSuccess }) => {

  const responseGoogle = response => {
    console.log("Encoded JWT ID token: ", response.credential);
    // Gửi JWT này đến server để xác minh và lưu trữ refresh_token
    fetch('/api/storeToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: response.credential }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error:', err));
  }
   const responseError = error => {
    console.log(error + "loi khong nhan duoc");
    // Xử lý lỗi khi đăng nhập không thành công
   };

  return (
    <div>
      <GoogleLogin 
          buttonText='Sign in and Authorize Calender'// tên button
          onSuccess={responseGoogle}
          onError={responseError}
          cookiePolicy={'single_host_origin'}// chính sách cookie áp dụng, 'single_host_origin' nghĩa là chỉ có cookie của trang web hiện tại sẽ được gửi cùng với yêu cầu
          //importan
          responseType='code'//Loại phản hồi từ dịch vụ OAuth. 'code' cho biết ứng dụng sẽ nhận lại mã xác thực từ dịch vụ sau khi người dùng đăng nhập thành công
          accessType='offline'// Loại truy cập yêu cầu khi ng dùng đăng nhập,'offline' cho biết ứng dụng yêu cầu quyền truy cập ngoại tuyến để có thể thực hiện các tác vụ mà không cần người dùng đang đăng nhập.
          scope='openid email profile https://www.googleapis.com/auth/calendar'
          />
    </div>
  );
}

export default Login;
# ShopHoa



## Mô hình hoạt động của Express

<div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
</div>

Khởi tạo ứng dụng express --> Routing --> Middleware --> Request Handlers --> Phản hồi lại client --> Listening for Requests

### Chi tiết

Mô hình hoạt động của Express (Express.js) trong Node.js có thể hiểu như sau:

### 1. **Khởi tạo ứng dụng Express**
   - Đầu tiên, ứng dụng Express được tạo bằng cách gọi hàm `express()`. Ứng dụng này là một đối tượng đại diện cho toàn bộ ứng dụng web.

### 2. **Tuyến đường (Routing)**
   - Express sử dụng hệ thống định tuyến để xác định cách xử lý các yêu cầu HTTP. Mỗi tuyến đường bao gồm một phương thức HTTP (GET, POST, PUT, DELETE, v.v.) và một URL cụ thể.
   - Khi một yêu cầu HTTP đến, Express sẽ kiểm tra xem có tuyến đường nào khớp với yêu cầu này không. Nếu có, nó sẽ chạy các middleware và hàm xử lý tương ứng.

### 3. **Middleware**
   - Middleware trong Express là các hàm xử lý trung gian, được thực thi trong quá trình xử lý yêu cầu. Chúng có thể được sử dụng để:
     - Xử lý dữ liệu yêu cầu (ví dụ: parse JSON hoặc URL-encoded).
     - Xác thực hoặc kiểm tra quyền truy cập.
     - Thêm thông tin vào đối tượng yêu cầu hoặc phản hồi.
     - Gọi các middleware hoặc hàm xử lý tiếp theo.
   - Middleware có thể được áp dụng cho toàn bộ ứng dụng, cho các tuyến đường cụ thể hoặc theo một số điều kiện nhất định.

### 4. **Hàm xử lý yêu cầu (Request Handlers)**
   - Khi một tuyến đường khớp với yêu cầu, các hàm xử lý yêu cầu (request handlers) sẽ được gọi. Đây là nơi xử lý logic của ứng dụng, như truy vấn cơ sở dữ liệu, trả về nội dung cho client hoặc thực hiện các tác vụ khác.
   - Các hàm xử lý thường sử dụng hai đối tượng là `req` (request) và `res` (response) để truy cập dữ liệu yêu cầu và gửi phản hồi.

### 5. **Phản hồi lại client**
   - Sau khi yêu cầu đã được xử lý, ứng dụng sẽ gửi phản hồi về cho client thông qua đối tượng `res`. Phản hồi này có thể là HTML, JSON, text, hoặc thậm chí là tệp tin.

### 6. **Lắng nghe yêu cầu (Listening for Requests)**
   - Cuối cùng, ứng dụng sẽ lắng nghe các yêu cầu HTTP trên một cổng xác định (ví dụ: 3000). Điều này cho phép ứng dụng web hoạt động và đáp ứng các yêu cầu từ client.

Mô hình này cho phép Express xử lý các yêu cầu HTTP một cách linh hoạt và có thể mở rộng.

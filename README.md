# SHOP HOA



# Mô hình hoạt động của Express

<div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
</div>

Khởi tạo ứng dụng express --> Routing --> Middleware --> Request Handlers --> Phản hồi lại client --> Listening for Requests

## Chi tiết

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

# Mô hình hoạt động của reactJS
## Giới thiệu
ReactJS là một thư viện JavaScript mạnh mẽ, được phát triển bởi Facebook, giúp xây dựng giao diện người dùng (UI) cho các ứng dụng web một cách hiệu quả và dễ dàng. Mô hình hoạt động của React có thể được chia thành một số khái niệm cốt lõi như: Component-based architecture, Virtual DOM, One-way Data Binding, và Reconciliation. Dưới đây là mô tả chi tiết về các mô hình hoạt động này:
## Mô hình hoạt động
Component-based: React xây dựng UI dựa trên các component độc lập.

Virtual DOM: React sử dụng Virtual DOM để tối ưu hiệu suất khi cập nhật giao diện.

One-way Data Binding: Dữ liệu chỉ di chuyển theo một chiều từ component cha xuống component con.

Reconciliation: React sử dụng thuật toán hòa giải để tối ưu hóa việc cập nhật DOM.

JSX: JSX là cú pháp cho phép bạn viết HTML trong JavaScript.

Hooks: Hooks cung cấp các tính năng như state, lifecycle, và side effects trong các function component.

Event Handling: React xử lý sự kiện một cách tối ưu và không cần phải tái tải trang.
### Các bước:
Khởi tạo --> Render lần đầu --> Cập nhật --> Reconciliation --> Component Lifecycle --> Event Handling
### Chi tiết
1️⃣ Khởi tạo: ReactDOM.render() sẽ render component gốc.

2️⃣Render lần đầu: Các component sẽ được tạo và render.

3️⃣Cập nhật: Khi state hoặc props thay đổi, React sẽ gọi lại hàm render và cập nhật Virtual DOM.

4️⃣Reconciliation: So sánh Virtual DOM và DOM thực tế, chỉ cập nhật những phần cần thiết.

5️⃣Component Lifecycle: Các lifecycle methods hoặc hooks sẽ được gọi ở các thời điểm thích hợp trong quá trình render và cập nhật.

6️⃣Event Handling: Các sự kiện sẽ được xử lý và có thể thay đổi state, từ đó trigger render lại.

## Cấu trúc thư mục
![image](https://github.com/user-attachments/assets/ffc74bfa-9f7b-449f-ac07-c8ebc4f2e30f)

<h3 align="left">🔥Languages and Tools:</h3>
<div align="center">
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL"  alt="MySQL" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>
</div>



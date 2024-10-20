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


<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://flutter.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>


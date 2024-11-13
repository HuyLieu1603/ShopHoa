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

## Cấu trúc thư mục
my-react-app/
├── public/
│   ├── index.html          # File HTML chính, nơi React sẽ được render vào
│   ├── favicon.ico         # Biểu tượng trang web
│   └── ...                 # Các file tĩnh khác như ảnh, fonts, ...
├── src/
│   ├── assets/             # Thư mục chứa các tài nguyên như hình ảnh, fonts, icon
│   ├── components/         # Các component UI tái sử dụng được trong ứng dụng
│   │   ├── Header.js       # Header component
│   │   ├── ProductCard.js  # Một component sản phẩm
│   │   └── ...             # Các component khác
│   ├── pages/              # Các trang của ứng dụng
│   │   ├── Home.js         # Trang chủ
│   │   ├── ProductDetails.js # Chi tiết sản phẩm
│   │   └── ...             # Các trang khác
│   ├── services/           # Các dịch vụ hoặc logic xử lý API
│   │   ├── api.js          # Các hàm liên quan đến API
│   │   └── ...             # Các dịch vụ khác
│   ├── utils/              # Các hàm tiện ích (helpers)
│   │   ├── formatDate.js   # Ví dụ: hàm định dạng ngày
│   │   └── ...             # Các tiện ích khác
│   ├── App.js              # Component chính của ứng dụng
│   ├── index.js            # Entry point của ứng dụng React
│   └── ...                 # Các file khác như các hook, context, reducers...
├── .gitignore              # Các file và thư mục cần bỏ qua khi sử dụng Git
├── package.json            # Thông tin về dự án và các dependencies
├── package-lock.json       # Lock file của các dependencies (tự động tạo)
└── README.md               # Mô tả dự án, cách cài đặt và sử dụng


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



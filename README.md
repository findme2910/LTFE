# Dự án Tái Tạo Trang Web Báo Điện Tử Thanh Niên

## 1. Giới thiệu

Dự án này là việc tái tạo lại trang web báo điện tử Thanh Niên bằng cách sử dụng các công nghệ hiện đại như ReactJS, TypeScript và TailwindCSS. Mục tiêu của dự án là cung cấp trải nghiệm người dùng tốt hơn, nâng cao hiệu suất và khả năng tùy biến, đồng thời tích hợp các tính năng mới như chế độ tối/sáng, tìm kiếm bằng giọng nói, và các tiện ích thời tiết, tỷ giá ngoại tệ, giá vàng, kết quả xổ số, chứng khoán, lịch truyền hình, lịch chiếu phim, giá xăng dầu, và chất lượng không khí.

## 2. Công nghệ sử dụng

-  **ReactJS**: Thư viện JavaScript mạnh mẽ để xây dựng giao diện người dùng.
-  **TypeScript**: Ngôn ngữ lập trình phát triển từ JavaScript, cung cấp tính năng kiểm tra kiểu tĩnh.
-  **TailwindCSS**: Framework CSS tiện lợi, giúp tạo giao diện nhanh chóng và dễ dàng tùy biến.
-  **RSS Feed**: Sử dụng để crawl dữ liệu từ trang báo Thanh Niên.
-  **LocalStorage**: Lưu trữ lịch sử các bài báo đã đọc.
-  **API thời tiết, tỷ giá ngoại tệ, giá vàng, kết quả xổ số, chứng khoán, lịch truyền hình, lịch chiếu phim, giá xăng dầu, AQI**: Tích hợp các thông tin tiện ích cho người dùng.

## 3. Mô tả các tính năng

-  **Dark/Light Mode**: Cho phép người dùng chuyển đổi giữa chế độ giao diện tối và sáng để phù hợp với môi trường ánh sáng và sở thích cá nhân.
-  **Hiển thị danh sách các bài báo theo từng danh mục**: Các bài báo được phân loại theo từng danh mục như Thời sự, Kinh tế, Thể thao, Giải trí, v.v.
-  **Phân trang cho từng danh mục**: Danh sách bài báo được phân trang để giúp người dùng dễ dàng duyệt qua nhiều bài viết.
-  **Tìm kiếm bài báo bằng giọng nói**: Người dùng có thể sử dụng giọng nói để tìm kiếm bài viết, cải thiện trải nghiệm người dùng.
-  **Lưu lại lịch sử các bài báo đã đọc**: Các bài báo mà người dùng đã nhấp vào sẽ được lưu lại trong LocalStorage để dễ dàng truy xuất lại sau này.
-  **Đọc tự động ở trang chi tiết**: Trang chi tiết bài báo có tính năng đọc tự động, giúp người dùng có thể nghe nội dung bài viết.
-  **Download bài báo để đọc offline**: Người dùng có thể tải xuống bài báo để đọc khi không có kết nối internet.
-  **Share bài báo qua mạng xã hội**: Tính năng chia sẻ bài báo qua các mạng xã hội như Facebook, Twitter, v.v.
-  **Tích hợp API thời tiết**: Hiển thị nhiệt độ và thời tiết ở các tỉnh thành.
-  **Tích hợp API tiện ích khác**: Thông tin về tỷ giá ngoại tệ, giá vàng, kết quả xổ số, chứng khoán, lịch truyền hình, lịch chiếu phim, giá xăng dầu, và AQI (chất lượng không khí) được cập nhật liên tục.
-  **Performance**: Lazy loading image, code splitting.

## 4. Hướng dẫn cài đặt và triển khai

### Yêu cầu cài đặt

-  Node.js và npm.
-  IDE: Visual Studio Code (VSCode).

### Các bước cài đặt và chạy dự án (sử dụng terminal)

1. Clone dự án từ repository:
   ```bash
   git clone <repository_url>
   ```
2. Di chuyển vào thư mục dự án:
   ```bash
   cd <project_folder>
   ```
3. Cài đặt các package cần thiết:
   ```bash
   npm install
   ```
4. Chạy dự án:
   ```bash
   npm run dev
   ```

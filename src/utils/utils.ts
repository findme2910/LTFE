export default function convertTimeFormat(inputTime:string) {
    // Tạo một đối tượng Date từ chuỗi đầu vào
    let date = new Date(inputTime);

    // Tạo các mảng để lưu trữ các giá trị ngày, tháng và năm
    let daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Định dạng lại ngày tháng năm theo định dạng yêu cầu
    let formattedDate = `${daysOfWeek[date.getDay()]}, ${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return formattedDate;
}


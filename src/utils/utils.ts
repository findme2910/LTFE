export default function convertTimeFormat(inputTime: string) {
   // Tạo một đối tượng Date từ chuỗi đầu vào
   const date = new Date(inputTime)

   // Tạo các mảng để lưu trữ các giá trị ngày, tháng và năm
   const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
   const day = date.getDate()
   const month = date.getMonth() + 1
   const year = date.getFullYear()
   const hours = date.getHours()
   const minutes = date.getMinutes()
   const seconds = date.getSeconds()

   // Định dạng lại ngày tháng năm theo định dạng yêu cầu
   const formattedDate = `${daysOfWeek[date.getDay()]}, ${day.toString().padStart(2, '0')}/${month
      .toString()
      .padStart(2, '0')}/${year}, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`

   return formattedDate
}

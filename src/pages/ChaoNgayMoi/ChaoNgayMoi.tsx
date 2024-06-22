import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function ChaoNgayMoi() {
   return (
      <>
         <Helmet>
            <title>Chào buổi sáng - Những bài viết mang ý và góc nhìn kiến cá nhân của tác giả </title>
            <meta
               name='description'
               content='Chào buổi sáng, những bài viết mang ý kiến cá nhân của các phóng viên, nhà báo và bạn đọc về một số những đề tài trong xã hội. Dề tài về thời sự, kinh tế, kinh doanh, giáo dục, thế giới, văn hóa, thể thao, đời sống, sức khỏe được cập nhật nhanh và mới nhất 24h
'
            />
         </Helmet>
         <ListArticle url='chao-ngay-moi' title={'Chào Ngày Mới'} />
      </>
   )
}

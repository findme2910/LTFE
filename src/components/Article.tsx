import { useEffect, useState } from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
import LoadingDetail from '@/components/LoadingDetail'
import { Helmet } from 'react-helmet'
import DOMPurify from 'dompurify'
import { useLocation } from 'react-router-dom'
import {
   FacebookShareButton,
   FacebookIcon,
   TwitterShareButton,
   TwitterIcon,
   LinkedinShareButton,
   LineIcon,
   EmailShareButton,
   EmailIcon,
   TelegramShareButton,
   TelegramIcon,
} from 'react-share';

export const Article = ({ url }: { url: string }) => {
   const [contents, setContents] = useState<string>('')
   const [titleArticle, setTitleArticle] = useState<string>('')
   const [descArticle, setDescArticle] = useState<string>('')
   const { pathname } = useLocation()
   const [isReading, setIsReading] = useState<boolean>(false)
   const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
   const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url)
            const html = response.data
            const $ = cheerio.load(html)

            const title = $('title').html() || ''
            const detailSapoContent = $('.detail-sapo').html() || ''
            const detailCmainContent = $('.detail-cmain').html() || ''
            const detailRelatedContent = $('.detail__related').html() || ''

            setTitleArticle(title)
            setDescArticle(detailSapoContent)

            const combinedContent = `
               <div class="title-article">${title}</div>
               <div class="detail-sapo">${detailSapoContent}</div>
               <div class="detail-cmain">${detailCmainContent}</div>
               <div class="detail__related">${detailRelatedContent}</div>
            `

            setContents(combinedContent)
         } catch (error) {
            console.error('Error fetching data:', error)
         }
      }

      fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [url])

   useEffect(() => {
      const getVoices = () => {
         const voices = window.speechSynthesis.getVoices()
         const vietnameseVoice = voices.find(voice => voice.lang === 'vi-VN')
         setVoice(vietnameseVoice || null)
      }

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
         window.speechSynthesis.onvoiceschanged = getVoices
      }

      // Populate voices initially
      getVoices()
   }, [])

   const handleReadAloud = () => {
      const speechSynthesis = window.speechSynthesis
      if (isReading) {
         speechSynthesis.pause()
         setIsReading(false)
      } else {
         if (utterance) {
            speechSynthesis.resume()
         } else {
            if (!voice) {
               alert('Vietnamese voice is not available on this system.')
               return
            }
            const newUtterance = new SpeechSynthesisUtterance(DOMPurify.sanitize(contents, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }))
            newUtterance.lang = 'vi-VN'
            newUtterance.voice = voice
            newUtterance.onend = () => setIsReading(false)
            speechSynthesis.speak(newUtterance)
            setUtterance(newUtterance)
         }
         setIsReading(true)
      }
   }

   if (!contents) return <LoadingDetail />

   return (
      <div className='max-w-4xl mx-auto'>
         <Helmet>
            <title>{titleArticle}</title>
            <meta name='description' content={descArticle} />
         </Helmet>
         <div className='flex items-center gap-x-4'>
            <FacebookShareButton url={pathname}>
               <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={pathname}>
               <TwitterIcon size={40} round />
            </TwitterShareButton>
            <LinkedinShareButton url={pathname}>
               <LineIcon size={40} round />
            </LinkedinShareButton>
            <EmailShareButton url={pathname}>
               <EmailIcon size={40} round />
            </EmailShareButton>
            <TelegramShareButton url={pathname}>
               <TelegramIcon size={40} round />
            </TelegramShareButton>
         </div>
         <button onClick={handleReadAloud} className="my-3 p-2 flex items-center gap-x-2 bg-primaryColor text-white rounded">
            {isReading ? <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>
Tạm dừng</> : <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>
Đọc tự động</>}
         </button>
         <div
            dangerouslySetInnerHTML={{
               __html: DOMPurify.sanitize(contents)
            }}
         />
      </div>
   )
}

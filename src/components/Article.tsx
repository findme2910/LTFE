import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
import LoadingDetail from '@/components/LoadingDetail'
import { Helmet } from 'react-helmet'
import DOMPurify from 'dompurify'
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
   TelegramIcon
} from 'react-share'
import { Button } from '@/components/ui/button'
// interface highlightType {
//    text: string
//    startOffset: number
//    endOffset: number
// }
export const Article = ({ url }: { url: string }) => {
   const [contents, setContents] = useState<string>('')
   const [titleArticle, setTitleArticle] = useState<string>('')
   const [descArticle, setDescArticle] = useState<string>('')
   const pathname = window.location.href
   const [isReading, setIsReading] = useState<boolean>(false)
   const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
   const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null)
   // const [highlights, setHighlights] = useState<highlightType[]>([])

   const cssContent = `
   .container {
   max-width: 1248px;
   width: 100% !important;
   margin-left: auto;
   margin-right: auto;
   padding-left: 12px;
   padding-right: 12px;
}
      @media only screen and (max-width: 640px) {
         .box-category-item {
            flex-direction: column !important;
         }
         .box-category-item a {
            width: 100% !important;
         }
         .box-category-content {
            width: 100% !important;
         }
      }
      .detail-sapo {
         font-size: 22px;
         font-weight: 600;
         margin-bottom: 20px;
      }
      .detail-cmain h2 {
         font-size: 20px;
         font-weight: 700;
         margin-bottom: 10px;
      }
      .detail-cmain img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         margin-bottom: 8px;
      }
      .detail-cmain figure {
         width: 100% !important;
         margin: 0 !important;
      }
      .detail-cmain p {
         margin-bottom: 15px;
      }
      .detail-cmain p a {
       text-decoration: none;
   color: unset;
         pointer-events: none;
         background-color: transparent !important;
      }
      .detail-cmain figcaption {
         text-align: center;
      }
      .detail-cmain figcaption p {
         margin-bottom: 0;
      }
      .detail-cmain .PhotoCMS_Author {
         margin-bottom: 20px;
      }
      html.dark .detail__related {
         background-color: rgb(30 41 59);
      }
      .detail__related {
         border: 1px solid #ccc;
         background: #eee;
         padding: 15px;
         border-radius: 5px;
      }
    .detail__related a {
  text-decoration: none;
   color: unset;
         pointer-events: none;
         background-color: transparent !important;
    }
      .detail__related .title-category a {
         font-weight: 700;
         margin-bottom: 10px;
         display: block;
      }
      .box-category-item {
         display: flex;
         gap: 20px;
      }
      .box-category-item a {
         display: block;
         width: 40%;
      }
      .box-category-item a img {
         width: 100%;
         object-fit: cover;
      }
      .box-category-item .box-category-content {
         width: 60%;
      }
      .box-category-item .box-category-content h3 a {
         width: 100%;
         font-weight: 700;
         transition: all linear 0.15s;
      }
      .box-category-item .box-category-content h3 a:hover {
         color: #0098d1;
      }
      .box-category-item .box-category-content a {
         width: 100%;
         display: block;
         margin-top: 10px;
      }
      .title-article {
         font-size: 30px;
         font-weight: 700;
         margin-bottom: 30px;
      }
   `

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url)
            const html = response.data
            const $ = cheerio.load(html)

            const title = $('title').html() || ''
            const detailSapoContent = $('.detail-sapo').html() || ''
            const detailCmainContent = $('.detail-cmain').html() || ''
            const detailRelatedContent = $('.detail__related')

            // Thay đổi href của tất cả thẻ a trong class detail__related
            detailRelatedContent.find('a').each((i, elem) => {
               const oldHref = $(elem).attr('href')
               if (oldHref) {
                  const newHref = `/detail${oldHref}`
                  $(elem).attr('href', newHref)
               }
            })

            const updatedDetailRelatedContent = detailRelatedContent.html() || ''

            setTitleArticle(title)
            setDescArticle(detailSapoContent)

            const combinedContent = `
            <div class="title-article">${title}</div>
            <div class="detail-sapo">${detailSapoContent}</div>
            <div class="detail-cmain">${detailCmainContent}</div>
            <div class="detail__related">${updatedDetailRelatedContent}</div>
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
         const vietnameseVoice = voices.find((voice) => voice.lang === 'vi-VN')
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
            const newUtterance = new SpeechSynthesisUtterance(
               DOMPurify.sanitize(contents, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
            )
            newUtterance.lang = 'vi-VN'
            newUtterance.voice = voice
            newUtterance.onend = () => setIsReading(false)
            speechSynthesis.speak(newUtterance)
            setUtterance(newUtterance)
         }
         setIsReading(true)
      }
   }

   const handleDownload = () => {
      const sanitizedContent = DOMPurify.sanitize(contents)
      const htmlContent = `
         <!DOCTYPE html>
         <html lang="en">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titleArticle}</title>
            <style>${cssContent}</style>
         </head>
         <body class="container">
            ${sanitizedContent}
         </body>
         </html>
      `

      const element = document.createElement('a')
      const file = new Blob([htmlContent], { type: 'text/html' })
      element.href = URL.createObjectURL(file)
      element.download = `${titleArticle}.html`
      document.body.appendChild(element) // Required for this to work in FireFox
      element.click()
   }
   const handleHighlight = useCallback(() => {
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
         const range = selection.getRangeAt(0)
         const selectedText = range.toString()

         if (selectedText.length > 0) {
            // const newHighlight = {
            //    text: selectedText,
            //    startOffset: range.startOffset,
            //    endOffset: range.endOffset
            // }
            // setHighlights((prevHighlights) => [...prevHighlights, newHighlight])

            // Add a highlight to the range
            const span = document.createElement('span')
            span.className = 'highlight'
            range.surroundContents(span)

            // Clear the selection
            selection.removeAllRanges()
         }
      }
   }, [])
   const handleRemoveHighlights = () => {
      // const elements = document.querySelectorAll('.highlight')
      // elements.forEach((element) => {
      //    const parent = element.parentNode
      //    while (element.firstChild) {
      //       parent?.insertBefore(element.firstChild, element)
      //    }
      //    parent?.removeChild(element)
      // })
      // setHighlights([])
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
         const range = selection.getRangeAt(0)
         const selectedText = range.toString()

         if (selectedText.length > 0) {
            const parentNode = range.commonAncestorContainer.parentNode as HTMLElement
            if (parentNode && parentNode.classList.contains('highlight')) {
               const textNode = document.createTextNode(parentNode.textContent!)
               parentNode.parentNode!.replaceChild(textNode, parentNode)
            }
            selection.removeAllRanges()
         }
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
         <div className='my-3 flex items-center gap-x-10 gap-y-5 flex-wrap'>
            <button onClick={handleReadAloud} className='auto-read flex items-center justify-center gap-x-1'>
               {isReading ? (
                  <>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z'
                        />
                     </svg>
                     Tạm dừng
                  </>
               ) : (
                  <>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z'
                        />
                     </svg>
                     Đọc tự động
                  </>
               )}
               <div id='clip'>
                  <div id='leftTop' className='corner' />
                  <div id='rightBottom' className='corner' />
                  <div id='rightTop' className='corner' />
                  <div id='leftBottom' className='corner' />
               </div>
               <span id='rightArrow' className='arrow' />
               <span id='leftArrow' className='arrow' />
            </button>

            <button onClick={handleDownload} className='Download-button'>
               <svg viewBox='0 0 640 512' width={20} height={16} xmlns='http://www.w3.org/2000/svg'>
                  <path
                     fill='white'
                     d='M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z'
                  />
               </svg>
               <span>Tải về</span>
            </button>

            <Button onClick={handleHighlight} className='text-base text-center w-32 rounded-xl h-12 relative group'>
               <div className='bg-green-400 rounded-xl h-10 w-[30%] flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[120px] z-10 duration-500'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth={1.5}
                     stroke='currentColor'
                     className='size-6'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                     />
                  </svg>
               </div>
               <p className='translate-x-5'>Đánh dấu</p>
            </Button>

            <Button
               onClick={handleRemoveHighlights}
               className='text-base text-center w-32 rounded-xl h-12 relative group'
            >
               <div className='bg-green-400 rounded-xl h-10 w-[30%] flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[120px] z-10 duration-500'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth={1.5}
                     stroke='currentColor'
                     className='size-6'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5'
                     />
                  </svg>
               </div>
               <p className='translate-x-5'>Bỏ dấu</p>
            </Button>
         </div>

         <div
            dangerouslySetInnerHTML={{
               __html: DOMPurify.sanitize(contents)
            }}
         />
      </div>
   )
}

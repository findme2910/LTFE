import React from 'react'
export default function ChatBot() {
   return (
      <>
         <df-messenger
            intent='WELCOME'
            chat-title='Bạn cần giúp gì?'
            agent-id='03647fc4-c010-4c16-821b-c9ce9fa3da5d'
            language-code='vi'
         ></df-messenger>
      </>
   )
}

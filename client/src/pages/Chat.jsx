import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useGetProfileQuery } from '../lib/api'
import SidebarNav from '../components/SidebarNav'
import ConversationList from '../components/ConversationList'
import ChatHeader from '../components/ChatHeader'
import MessageArea from '../components/MessageArea'
import MessageInput from '../components/MessageInput'

/**
 * Chat Page - Dynamic layout with auth check
 * Layout: [SidebarNav] [ConversationList] [ChatArea]
 */
const Chat = () => {
    const { data, error, isLoading} = useGetProfileQuery()
  const navigate = useNavigate()
  
  console.log('first=',data)
 
  useEffect(() => {
    
    if (!isLoading && error) {
      navigate('/login')
    }
  }, [isLoading, error, navigate])

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-surface-dark text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="flex h-full w-full overflow-hidden bg-surface-panel">
      {/* Left Icon Navigation Bar */}
      <SidebarNav />

      {/* Conversation List Panel */}
      <ConversationList profileData={data}/>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-surface-chat min-w-0">
        <ChatHeader />
        <MessageArea />
        <MessageInput />
      </div>
    </div>
  )
}

export default Chat

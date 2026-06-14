import { useSelector } from 'react-redux'
import ChatHeader from '../components/ChatHeader'
import MessageArea from '../components/MessageArea'
import MessageInput from '../components/MessageInput'
import EmptyChat from '../components/EmptyChat'

/**
 * Chat Page - Main chat area (right panel)
 * Receives active conversation state from Redux and shows static chat content
 */
const Chat = () => {
  const activeConvo = useSelector((state) => state.activeConv.active)

  // No conversation selected → show empty/welcome screen
  if (!activeConvo) {
    return <EmptyChat />
  }

  // Conversation selected → show static chat content
  return (
    <div className="flex-1 flex flex-col bg-surface-chat min-w-0">
      <ChatHeader selectedConvo={activeConvo} />
      <MessageArea selectedConvo={activeConvo} />
      <MessageInput />
    </div>
  )
}

export default Chat

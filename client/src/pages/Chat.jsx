import SidebarNav from '../components/SidebarNav'
import ConversationList from '../components/ConversationList'
import ChatHeader from '../components/ChatHeader'
import MessageArea from '../components/MessageArea'
import MessageInput from '../components/MessageInput'

/**
 * Chat Page - Fully static layout
 * Layout: [SidebarNav] [ConversationList] [ChatArea]
 */
const Chat = () => {
  return (
    <div className="flex h-full w-full overflow-hidden bg-surface-panel">
      {/* Left Icon Navigation Bar */}
      <SidebarNav />

      {/* Conversation List Panel */}
      <ConversationList />

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

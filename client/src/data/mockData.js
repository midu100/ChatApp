/**
 * Static mock data matching the user's mockup image exactly
 */

// Current logged-in user
export const currentUser = {
  id: 'user-0',
  name: 'Midu',
  phone: '+880 1700-000000',
  about: 'Building amazing things with code 🚀',
}

// Conversations list matching the mockup image exactly
export const conversations = [
  {
    id: 'conv-1',
    name: 'Chole Adams',
    lastMessage: 'Hey Did you just ......',
    time: 'Just now',
    unreadCount: 1,
    isOnline: true,
    isTyping: true, // Shows typing indicator at the bottom
    messageType: 'text',
    isSent: false,
    lastSeen: 'online',
    phone: '+880 1711-223344',
    about: 'Design is not just what it looks like, design is how it works.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    id: 'conv-2',
    name: 'Amin Rokhead',
    lastMessage: 'can you send it to me',
    time: 'yesterday 11:08 pm',
    unreadCount: 0,
    isOnline: false,
    isTyping: false,
    messageType: 'text',
    isSent: false,
    lastSeen: 'yesterday at 11:08 PM',
    phone: '+880 1722-334455',
    about: 'Available',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
  },
  {
    id: 'conv-3',
    name: 'Zareena',
    lastMessage: 'You are a ****',
    time: 'yesterday 10:59 pm',
    unreadCount: 0,
    isOnline: false,
    isTyping: false,
    messageType: 'text',
    isSent: false,
    lastSeen: 'yesterday at 10:59 PM',
    phone: '+880 1733-445566',
    about: 'Busy',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
  },
  {
    id: 'conv-4',
    name: 'Ashton',
    lastMessage: 'dude this is crazy stuff',
    time: 'yesterday 10:08 pm',
    unreadCount: 0,
    isOnline: false,
    isTyping: false,
    messageType: 'text',
    isSent: true,
    lastSeen: 'yesterday at 10:08 PM',
    phone: '+880 1744-556677',
    about: 'At work',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  },
  {
    id: 'conv-5',
    name: 'Ronda',
    lastMessage: 'Get some sleep *** head',
    time: 'yesterday 10:00 pm',
    unreadCount: 0,
    isOnline: false,
    isTyping: false,
    messageType: 'text',
    isSent: false,
    lastSeen: 'yesterday at 10:00 PM',
    phone: '+880 1755-667788',
    about: 'Sleeping 💤',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150'
  },
  {
    id: 'conv-6',
    name: 'Joyce',
    lastMessage: 'lets meet tommorrow 😢',
    time: 'yesterday 9:48 pm',
    unreadCount: 0,
    isOnline: true,
    isTyping: false,
    messageType: 'text',
    isSent: false,
    lastSeen: 'online',
    phone: '+880 1766-778899',
    about: 'Coffee lover ☕',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'
  },
  {
    id: 'conv-7',
    name: 'Collins',
    lastMessage: 'You know it 😉',
    time: 'yesterday 9:08 pm',
    unreadCount: 0,
    isOnline: false,
    isTyping: false,
    messageType: 'text',
    isSent: true,
    lastSeen: 'yesterday at 9:08 PM',
    phone: '+880 1777-889900',
    about: 'Coding standard solutions',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150'
  },
  {
    id: 'conv-8',
    name: 'Manoj',
    lastMessage: 'This design sucks',
    time: 'yesterday 8:08 pm',
    unreadCount: 0,
    isOnline: false,
    isTyping: false,
    messageType: 'text',
    isSent: false,
    lastSeen: 'yesterday at 8:08 PM',
    phone: '+880 1788-990011',
    about: 'In a meeting',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150'
  }
]

// Message history matching the mockup exactly
export const messagesData = {
  'conv-1': [
    {
      id: 'm1',
      text: 'Dude this thing we are trying',
      time: 'Today 7.00 am',
      date: 'Today',
      isSent: false,
      isRead: true,
      isDelivered: true,
    },
    {
      id: 'm2',
      text: 'will be the best failure in design',
      time: 'Today 7.00 am',
      date: 'Today',
      isSent: false,
      isRead: true,
      isDelivered: true,
    },
    {
      id: 'm3',
      text: "But if we leave like we don't care we can't design stuffs girl don't care about criticism",
      time: 'Today 7.01 am',
      date: 'Today',
      isSent: true,
      isRead: true,
      isDelivered: true,
    },
    {
      id: 'm4',
      text: 'I already published it 🙄',
      time: 'Today 7.01 am',
      date: 'Today',
      isSent: true,
      isRead: true,
      isDelivered: true,
    },
    {
      id: 'm5',
      text: 'Hey Did you just ......',
      time: 'Today 7.02 am',
      date: 'Today',
      isSent: false,
      isRead: false,
      isDelivered: true,
    }
  ],
  'conv-2': [
    {
      id: 'm1',
      text: 'Hey, did you get the files?',
      time: 'yesterday 11:00 pm',
      date: 'Yesterday',
      isSent: true,
      isRead: true,
      isDelivered: true,
    },
    {
      id: 'm2',
      text: 'can you send it to me',
      time: 'yesterday 11:08 pm',
      date: 'Yesterday',
      isSent: false,
      isRead: true,
      isDelivered: true,
    }
  ]
}

export const defaultMessages = [
  {
    id: 'dm1',
    text: 'Hello! 👋',
    time: 'Yesterday 3:00 PM',
    date: 'Yesterday',
    isSent: false,
    isRead: true,
    isDelivered: true,
  },
  {
    id: 'dm2',
    text: 'Hi there! How is it going?',
    time: 'Yesterday 3:05 PM',
    date: 'Yesterday',
    isSent: true,
    isRead: true,
    isDelivered: true,
  }
]

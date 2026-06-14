import { Lock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const avatars = [
  {
    src: "https://i.pravatar.cc/150?img=11",
    className: "top-16 left-28",
  },
  {
    src: "https://i.pravatar.cc/150?img=21",
    className: "top-24 right-32",
  },
  {
    src: "https://i.pravatar.cc/150?img=31",
    className: "bottom-24 left-40",
  },
  {
    src: "https://i.pravatar.cc/150?img=41",
    className: "bottom-20 right-36",
  },
];

export default function EmptyChat() {
  return (
    <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-[#FAF7F2]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-emerald-300/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-indigo-300/20 blur-[140px]" />

      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-pink-300/20 blur-[120px]" />

      {/* Floating Avatars */}
      {avatars.map((avatar, index) => (
        <motion.img
          key={index}
          src={avatar.src}
          className={`absolute w-16 h-16 rounded-full border-4 border-white shadow-2xl ${avatar.className}`}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Main Card */}
      <div
        className="
        relative z-10
        px-16 py-14
        rounded-[40px]
        bg-white/60
        backdrop-blur-3xl
        border border-white/70
        shadow-[0_20px_80px_rgba(0,0,0,.08)]
        "
      >
        {/* Icon */}
        <motion.div
          className="mx-auto w-28 h-28 rounded-full bg-emerald-100 flex items-center justify-center"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <MessageCircle
            size={50}
            className="text-emerald-500"
          />
        </motion.div>

        {/* Heading */}
        <h1 className="mt-8 text-center text-5xl font-bold text-slate-800">
          Welcome to TalkChat
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-lg text-center text-gray-500 leading-8">
          Send and receive messages instantly.
          <br />
          Stay connected with friends and teams
          across multiple devices.
        </p>

        {/* Typing Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="typing-dot"></div>
          <div className="typing-dot delay-200"></div>
          <div className="typing-dot delay-400"></div>
        </div>

        {/* Encryption */}
        <div className="mt-10 flex items-center justify-center gap-2 text-gray-400">
          <Lock size={14} />
          <span className="text-xs">
            End-to-end encrypted
          </span>
        </div>
      </div>
    </div>
  );
}


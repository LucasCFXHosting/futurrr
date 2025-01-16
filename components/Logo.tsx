export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gradient-to-br from-[#00a8ff] to-[#00ffa3] rounded-lg transform rotate-45 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/20 transform -rotate-45" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-[#00a8ff] to-[#00ffa3] text-transparent bg-clip-text">
        FuturLine
      </span>
    </div>
  )
} 
export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-xl">C</span>
        </div>
        <div className="text-text font-semibold">Loading CliniCore.ai...</div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import { useSocket } from './hooks/useSocket';

function App() {
  const user = { _id: "current_user_id" }; // Replace with real auth user
  useSocket(user._id);

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-1/3 border-r border-gray-300">
        <Sidebar />
      </div>
      <div className="w-2/3">
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
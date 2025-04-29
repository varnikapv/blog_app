import { Toaster } from 'react-hot-toast'
import Blog from './Blog'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f6f9fc, #e9f1ff)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px'
    }}>
      <Blog />
      <Toaster position="bottom-center" />
    </div>
  )
}

export default App

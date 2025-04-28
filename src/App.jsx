import ProfileCard from './ProfileCard'
import Blog from './Blog'

function App() {

  return (

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '30px',
      }}>
        <ProfileCard 
        image="https://i.pravatar.cc/150?img=9"
        name="Jane Doe"
        bio="Frontend Developer | React Enthusiast 🚀"
        />

        <ProfileCard
        image="https://i.pravatar.cc/150?img=5"
        name="John Smith"
        bio="Backend Developer | Node.js Lover 💻 "/>

        <ProfileCard
        image="https://i.pravatar.cc/150?img=7"
        name="Alice Johnson"
        bio="UI/UX Designer | Creative Thinker 🎨"/>

      <Blog />
      </div>

  )
}

export default App

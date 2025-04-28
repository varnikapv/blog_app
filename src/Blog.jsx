import { useState, useEffect } from 'react'
import BlogPost from './BlogPost'

function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const savedPosts = localStorage.getItem('my-blog-posts')
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts))
    }
  }, [])

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('my-blog-posts', JSON.stringify(posts))
    }
  }, [posts])
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem('my-blog-posts', JSON.stringify(posts))
    }, 100) // 100ms small delay
  
    return () => clearTimeout(timeout)
  }, [posts])
  
   
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleAddPost(e) {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title: title,
      content: content
    }

    setPosts([newPost, ...posts])

    // clear input fields
    setTitle('')
    setContent('')
  }

  function handleDeletePost(id) {
    const updatedPosts = posts.filter(post => post.id !== id)
    setPosts(updatedPosts)
  } 

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h1>Mini Blog 📝</h1>
      
      <form onSubmit={handleAddPost} style={{ marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          required
        />
        <textarea 
          placeholder="Content..." 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: '100%', padding: '10px', height: '100px' }}
          required
        ></textarea>

        <button type="submit" style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Add Post</button>
      </form>

      {/* Render all posts */}
      {posts.map((post) => (
        <BlogPost 
          key={post.id}
          title={post.title}
          content={post.content}
          onDelete={() => handleDeletePost(post.id)}
        />
      ))}
    

      
    </div>
  )
}

export default Blog

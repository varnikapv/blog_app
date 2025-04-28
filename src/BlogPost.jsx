function BlogPost(props) {
    return (
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        transition: 'transform 0.2s',
      }}>
        <h2 style={{ 
          marginBottom: '10px', 
          color: '#333', 
          fontSize: '22px' 
        }}>
          {props.title}
        </h2>
  
        <p style={{ 
          marginBottom: '20px', 
          color: '#666', 
          fontSize: '16px', 
          lineHeight: '1.5' 
        }}>
          {props.content}
        </p>
  
        <button 
          onClick={props.onDelete}
          style={{
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '10px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ff1a1a'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ff4d4d'}
        >
          Delete
        </button>
      </div>
    )
  }
  
  export default BlogPost
  
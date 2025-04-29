function BlogPost(props) {
    return (
      <div style={{
        border: '1px solid #eee',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#fafafa',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        fontFamily: "'Poppins', sans-serif"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)'
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)'
      }}
      >
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
  
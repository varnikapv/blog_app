function BlogPost(props) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            marginBottom: '20px',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.05)'
        }}>

            <h2>{props.title}</h2>
            <p>{props.content}</p>

            <button
                    onClick={props.onDelete}
                    style={{
                        marginTop: '10px',
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'block'
                    }}
                    >
                       Delete 
                    </button>
        </div>
    )
}

export default BlogPost
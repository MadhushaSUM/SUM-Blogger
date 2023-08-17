import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const Write = () => {

  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" id='file' />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
          <input type="radio" name='cat' value="games" id='games' />
          <label htmlFor="games">Games</label>
          </div>          

          <div className="category">
          <input type="radio" name='cat' value="tech" id='tech' />
          <label htmlFor="tech">Technology</label>
          </div>

          <div className="category">
          <input type="radio" name='cat' value="programming" id='programming' />
          <label htmlFor="programming">Programming</label></div>

          <div className="category">
          <input type="radio" name='cat' value="news" id='news' />
          <label htmlFor="news">News</label></div>
        </div>
      </div>      
    </div>
  )
}

export default Write
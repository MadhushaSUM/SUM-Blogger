import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'
import moment from "moment"


const Write = () => {

  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || '');
  const [value, setValue] = useState(state?.desc || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');

  const navigate = useNavigate()

  const upload = async ()=>{
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);

      for (let i = 0; i < 1000; i++) {
        
      } 

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const imgURL = await upload();

    try {
      state 
      ? await axios.put(`/posts/${state.id}`, {
        title, 
        desc:value, 
        cat, 
        img:file ? imgURL : ""
      }) 
      : await axios.post(`/posts/`, {
        title, 
        desc:value, 
        cat, 
        img:file ? imgURL : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      navigate("/");
            
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
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
          <input style={{display:"none"}} type="file" id='file' onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
          <input type="radio" name='cat' value="games" checked={cat === "games"} id='games' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="games">Games</label>
          </div>          

          <div className="category">
          <input type="radio" name='cat' value="tech" checked={cat === "tech"} id='tech' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="tech">Technology</label>
          </div>

          <div className="category">
          <input type="radio" name='cat' value="programming" checked={cat === "programming"} id='programming' onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="programming">Programming</label></div>

          <div className="category">
          <input type="radio" name='cat' value="news" id='news' checked={cat === "news"} onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="news">News</label></div>
        </div>
      </div>      
    </div>
  )
}

export default Write
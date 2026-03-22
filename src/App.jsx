import { useState } from 'react'

function App() {

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [publicPost, setPublicPost] = useState(true);

  function handleSubmit(e) {
    e.preventDefault()
    console.log(author, title, body, publicPost);
    setAuthor('');
    setTitle('');
    setBody('');
    setPublicPost(true);
  };

  return (

      <form className="m-5" onSubmit={handleSubmit}>

        <div className="my-2">
          <label htmlFor="author" className="form-label">Author</label>
          <input id="author" type="text" className="form-control" value={author} placeholder='Insert post author' onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="my-2">
          <label htmlFor="title" className="form-label">Title</label>
          <input id="title" type="text" className="form-control" value={title} placeholder='Enter post title' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="my-4">
          <label htmlFor="post" className="form-label">Post</label>
          <textarea id="post" className="form-control" value={body} placeholder='..' onChange={(e) => setBody(e.target.value)} rows="10" />
        </div>
        <div className="mb-2">
          <label htmlFor="public" className="form-label">Choose saving options</label>
          <select id="public" className="form-select" value={publicPost} onChange={(e) => setPublicPost(e.target.value === 'true')}>
            <option value={true} >Publish post</option>
            <option value={false} >Save draft</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary my-3">Submit</button>

      </form>

  )
}

export default App
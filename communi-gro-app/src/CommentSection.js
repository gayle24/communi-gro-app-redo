import React, {useState} from 'react'

function CommentSection() {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [submittedComments, setSubmittedComments] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = { email, comment };
        setSubmittedComments([...submittedComments, newComment]);
        setEmail('');
        setComment('');
      };

      const background = {
        backgroundImage: `url('https://i.pinimg.com/736x/78/d0/ad/78d0ad6364813d7e1cff86fe4473e419--a-love-tea-party.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }

  return (
    <div className='comments' style={background}>
        <form onSubmit={handleSubmit}>
        <h2>Reviews and Comments</h2>
        <label htmlFor='email'>Email</label><br />
        <input
        name='email'
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        
        <label htmlFor='comment'>Comment/Review</label><br />
        <textarea
          id='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        /><br />
        
        <button type='submit'>Submit</button>
      </form>
      
      <ul>
      <h3>Submitted Comments</h3>
        {submittedComments.map((c, index) => (
          <li key={index}>
            <strong>{c.email}</strong>: {c.comment}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentSection;
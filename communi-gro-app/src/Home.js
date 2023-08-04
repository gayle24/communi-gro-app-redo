import React from 'react'

function Home() {

    const backgroundStyle = {
        backgroundImage: `url('https://cdn.openart.ai/stable_diffusion/adb8a84e04a3a15f601538c2becc71cd136eefbc_2000x2000.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: '25px',
        fontFamily: ''
      };

  return (

    <div className='home-page' style={backgroundStyle}>
      <h1>Welcome to CommuniGro</h1>
      <p>Discover a world of plants you can grow, indoors and outdoors.</p>
      <p>Order seedlings, share your experiences, and connect with fellow gardeners.</p>
      {/* <Link to='/plantlist'>Get Started</Link> */}
    </div>

  )
}

export default Home;

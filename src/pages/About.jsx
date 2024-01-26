import React from 'react'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About BH'Sellify</h1>
      <p className='mb-4 text-slate-700'>Bhardwaj's Sellify is a custom project made by Kartikey Bhardwaj that specializes in helping clients buy, sell, and rent vehicles </p>
      <p className='mb-4 text-slate-700'>
      In this application I have included advanced authentication and search functionality using MERN stack (MongoDB, Express, React, Node.js). The application's authentication includes both email and password authentication through the use of JSON Web Tokens along with Google OAuth integration.
      </p>
      <p className='mb-4 text-slate-700'>For safer user experience, user profile pages are protected on both client and backend sides. The user profile page offers the user to update their information including their username, email, password, profile photo etc. The application includes complete CRUD (Create, Read, Update, Delete) operations using the MongoDB database.</p>
    </div>
  )
}

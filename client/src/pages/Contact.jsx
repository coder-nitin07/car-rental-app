import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jGGFtAUFB93mh8_97MEgrX6qn6SEs8a6JQ&s' />

        <h4 className='text-center mb-3'>For Any Assistance </h4>

        <h4 className='mt-3 text-success'>
          <i className='fa-solid fa-phone-volume'></i> 0123456789
        </h4>

        <h4 className='mt-3'>
          <i className='fa-solid fa-envelope'></i> help@carrentalapp.com
        </h4>
      </div>
    </>
  )
}

export default Contact
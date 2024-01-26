import React from 'react'

const Streamlit = () => {
  return (
    <div className=' text-white'>
      {/* hello
      <a className='text-white px-32' href="https://diet-recommendation-system.streamlit.app/Diet_Recommendation" target='_blank'>Model</a> */}
      <iframe className='h-[100vh] w-[200vh]' src="http://localhost:8501/" frameborder="0"></iframe>
    </div>
  )
}

export default Streamlit
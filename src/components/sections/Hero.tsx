import React from 'react'

const Hero = () => {
  return (
	<section className="grid grid-cols-1 lg:grid-cols-2 border w-full">
	  <div className="w-full h-100 bg-teal-700 text-white">Image Section</div>
	  <div className="w-full h-100 bg-sky-700 text-white">Header Text Section</div>
	</section>
  )
}

export default Hero;

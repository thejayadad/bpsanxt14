import React from 'react'

const ShowCase = () => {
  return (
    <section className='px-4 py-8 '>
    <div className='mx-auto max-w-screen-xl bg-white p-8 sm:h-screen rounded-md'>
      <div className='text-center cursor-pointer'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>Fan Fury SportsHub</h1>
        <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
          Dive into our featured post and explore the thrilling world of sports like never before. Uncover in-depth analyses, exciting game highlights, and exclusive interviews with your favorite athletes. FanFury brings you closer to the heart of the game!
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-md bg-orange inline-flex mb-8"></div>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-full md:w-1/2">
                    <div className="md:p-2 p-1 w-full md:w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                    </div>
                    <div className="md:p-2 p-1 w-full md:w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                    <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                    </div>
                </div>
                <div className="flex flex-wrap w-full md:w-1/2">
                    <div className="md:p-2 p-1 w-full">
                    <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                    </div>
                    <div className="md:p-2 p-1 w-full md:w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                    </div>
                    <div className="md:p-2 p-1 w-full md:w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>  
  )
}

export default ShowCase
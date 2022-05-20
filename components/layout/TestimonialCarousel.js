import React from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'

const TestimonialCarousel = () => {
	// const autoplay = Autoplay({ delay: 2000, stopOnInteraction: false })

	// const [ref, embla] = useEmblaCarousel({ align: 'start', loop: false }, [autoplay])

	return (
		// <div className='p_base'>
		<div className='p_base flex gap-x-10 overflow-x-scroll hide-scrollbar'>
			{Array.from(Array(8).keys()).map((i) => (
				<section
					key={i}
					className='flex-shrink-0 max-w-lg w-full border-2 p-8 rounded-xl grid gap-10'
				>
					<div className='flex items-center gap-5'>
						<div className='h-[75px] w-[75px] bg-gray-200 rounded-full' />
						<section className='grid gap-1'>
							<h3 className='text-xl font-bold'>Lorem ipsum</h3>
							<p className='text-gray-400'>Agarbatti</p>
						</section>
					</div>
					<p className='text-xl text-gray-400 leading-loose'>
						&quot;Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat nummy
						nibh euismod tincidunt ut&quot;
					</p>
				</section>
			))}
		</div>
		// </div>
	)
}

export default TestimonialCarousel

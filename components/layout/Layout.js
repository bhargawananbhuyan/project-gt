import React from 'react'

const Layout = ({ children }) => {
	return (
		<div>
			<header className='max-w-screen-2xl mx-auto px-20 py-12'>
				<div className='h-[45px] w-[45px] bg-gray-200 rotate-45' />
			</header>
			<main>{children}</main>
			<footer>
				<section className='max-w-screen-xl mx-auto py-20 grid grid-cols-3 gap-10'>
					<div>
						<div className='grid gap-14'>
							<div className='h-[60px] w-[60px] bg-gray-200 rotate-45' />
							<p className='text-lg leading-relaxed text-gray-400'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, asdsad
								kdnvkasuydtoij kjshdg uiqnscae raeden rtae.
							</p>

							<section className='grid gap-3.5'>
								<h3 className='text-lg font-bold'>Follow us on</h3>
								<p className='flex gap-10'>
									{Array.from(Array(3).keys()).map((i) => (
										<span
											key={i}
											className='block h-[45px] w-[45px] bg-gray-200 rounded-full'
										/>
									))}
								</p>
							</section>
						</div>
					</div>

					<div>
						<div className='grid gap-10'>
							<section className='grid gap-3.5'>
								<h3 className='text-xl font-bold'>Quick links</h3>
								<p className='grid gap-2 text-lg text-gray-400'>
									<span>About</span>
									<span>Testimonials</span>
									<span>Contact</span>
								</p>
							</section>
							<section className='grid gap-3.5'>
								<h3 className='text-xl font-bold'>Our products</h3>
								<p className='grid gap-2 text-lg text-gray-400'>
									<span>Agarbatti</span>
									<span>Sambrani cups</span>
									<span>Camphor</span>
									<span>Dhoop</span>
								</p>
							</section>
						</div>
					</div>

					<div>
						<div className='grid gap-8'>
							<h3 className='text-xl font-bold'>Map location</h3>
							<div className='w-full h-[250px] bg-red-500 rounded-xl' />
							<p className='text-lg text-gray-400 leading-relaxed'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
							</p>
						</div>
					</div>
				</section>
				<div className='bg-gray-200'>
					<section className='max-w-screen-xl mx-auto py-8 flex items-center justify-between text-lg'>
						<h1>Designed by we3magic</h1>
						<h1>www.we3magic.com</h1>
					</section>
				</div>
			</footer>
		</div>
	)
}

export default Layout

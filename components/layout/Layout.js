import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Drawer from './Drawer'

const Layout = ({ children, footerBg = 'dark' }) => {
	return (
		<div>
			<header className='absolute left-0 top-0 w-screen z-[100]'>
				<div className='py-8 lg:py-10 flex items-center justify-between p_base'>
					<Link href={'/'}>
						<a>
							<img
								src={'/GT-Products-logo.png'}
								className='w-[60px] lg:w-[75px] h-auto object-contain'
								alt=''
							/>
						</a>
					</Link>

					{/* <button
						className={`text-xl py-1 px-2.5 lg:mr-2.5 ${
							footerBg === 'light' && 'text-white'
						}`}
					>
						<FontAwesomeIcon icon={faBars} />
					</button> */}
					<div className='relative sm:mr-3.5'>
						<Drawer />
					</div>
				</div>
			</header>
			<main>{children}</main>
			<footer>
				{footerBg === 'light' ? (
					<>
						<div className='bg-white py-20'>
							<div className='max-w-screen-xl mx-auto grid gap-10'>
								<section className='grid gap-3.5 text-gray-800'>
									<h1 className='text-4xl font-extrabold'>Contact form</h1>
									<p className='text-lg text-gray-500'>Get in touch with us</p>
								</section>

								<form>
									<div className='grid grid-cols-3 gap-5'>
										<input
											placeholder='First name'
											className='px-5 py-3.5 border border-gray-500 rounded-lg'
										/>
										<input
											placeholder='Last name'
											className='px-5 py-3.5 border border-gray-500 rounded-lg'
										/>
										<input
											placeholder='Email ID'
											className='px-5 py-3.5 border border-gray-500 rounded-lg'
										/>
										<textarea
											placeholder='Enter your message here'
											className='resize-none col-span-3 px-5 py-3.5 border border-gray-500 rounded-lg'
											rows={5}
										/>
									</div>

									<button className='bg-red-500 text-white px-7 py-3.5 w-[200px] text-left rounded-lg mt-10'>
										Submit
									</button>
								</form>
							</div>
						</div>
						<hr className='max-w-screen-xl mx-auto border-t-2' />
					</>
				) : (
					<div className='py-20 relative bg-black bg-opacity-30'>
						<img
							src='/Gt_Website-20.png'
							className='absolute object-cover w-screen h-full top-0 z-[-1]'
							alt=''
						/>
						<div className='p_base grid gap-10'>
							<section className='grid gap-3.5 text-white'>
								<h1 className='text-4xl font-extrabold'>Contact form</h1>
								<p className='text-lg text-gray-500'>Get in touch with us</p>
							</section>

							<form>
								<div className='grid md:grid-cols-3 gap-5'>
									<input
										placeholder='First name'
										className='px-5 py-3.5 bg-transparent text-white border border-gray-500 rounded-lg'
									/>
									<input
										placeholder='Last name'
										className='px-5 py-3.5 bg-transparent text-white border border-gray-500 rounded-lg'
									/>
									<input
										placeholder='Email ID'
										className='px-5 py-3.5 bg-transparent text-white border border-gray-500 rounded-lg'
									/>
									<textarea
										placeholder='Enter your message here'
										className='resize-none md:col-span-3 px-5 py-3.5 bg-transparent text-white border border-gray-500 rounded-lg'
										rows={5}
									/>
								</div>

								<button className='bg-gray-500 text-white px-7 py-3.5 w-[200px] text-left rounded-lg mt-10'>
									Submit
								</button>
							</form>
						</div>
					</div>
				)}
				<section className='p_base py-20 grid md:grid-cols-3 gap-10'>
					<div>
						<div className='grid gap-14'>
							<div className='h-[85px] w-[85px] relative'>
								<Image
									src={'/GT-Products-logo.png'}
									layout='fill'
									className='object-contain absolute'
									alt=''
								/>
							</div>
							<p className='text-lg leading-relaxed text-gray-400'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, asdsad
								kdnvkasuydtoij kjshdg uiqnscae raeden rtae.
							</p>

							<section className='grid gap-5'>
								<h3 className='text-lg font-bold'>Follow us on</h3>
								<p className='flex gap-10'>
									{Array.from(Array(3).keys()).map((i) => (
										<span
											key={i}
											className='block h-[60px] w-[60px] bg-gray-200 rounded-full'
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
					<section className='p_base py-8 flex items-center justify-between text-lg'>
						<h1>Designed by we3magic</h1>
						<h1>www.we3magic.com</h1>
					</section>
				</div>
			</footer>
		</div>
	)
}

export default Layout

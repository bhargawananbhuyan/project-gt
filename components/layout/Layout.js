import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'
import Drawer from './Drawer'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import Fade from './Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children, footerBg = 'dark' }) => {
	gsap.registerPlugin(TextPlugin)
	const [scrolled, setScrolled] = React.useState(false)

	React.useEffect(() => {
		if (window !== undefined) {
			window?.document?.addEventListener('scroll', () => {
				setScrolled(window?.document?.documentElement.scrollTop > 0)
			})
		}
	}, [])

	return (
		<div className='app'>
			<header
				className={`fixed ${
					scrolled ? 'bg-white bg-opacity-30 backdrop-blur-md' : ''
				} left-0 top-0 w-screen z-[200] transition-all`}
			>
				<div className='py-5 lg:py-6 flex items-center justify-between p_base'>
					<Link href={'/'}>
						<a>
							<img
								src={'/GT-Products-logo.png'}
								className='w-[48px] lg:w-[60px] h-auto object-contain'
								alt=''
							/>
						</a>
					</Link>
					<div className='relative sm:mr-3.5'>
						<Drawer />
					</div>
				</div>
			</header>
			<main>{children}</main>
			<footer id='contact'>
				{footerBg === 'light' ? (
					<>
						<div className='bg-white py-20'>
							<div className='grid gap-10 p_base'>
								<section className='grid gap-3.5 text-gray-800'>
									<ScrollTrigger>
										<Tween to={{ text: 'Contact Form' }} duration={1}>
											<h1 className='text-4xl font-extrabold' />
										</Tween>
									</ScrollTrigger>
									<Fade>
										<p className='text-lg text-gray-500'>
											Get in touch with us
										</p>
									</Fade>
								</section>

								<Fade>
									<form>
										<div className='grid md:grid-cols-3 gap-5'>
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
												className='resize-none md:col-span-3 px-5 py-3.5 border border-gray-500 rounded-lg'
												rows={5}
											/>
										</div>

										<button className='bg-red-500 text-white flex items-center gap-x-5 px-7 py-3.5 text-left rounded-lg mt-10'>
											<span>Submit</span>
											<FontAwesomeIcon icon={faArrowRight} />
										</button>
									</form>
								</Fade>
							</div>
						</div>
						<div className='p_base'>
							<hr className='border-t-2' />
						</div>
					</>
				) : (
					<div className='py-20 md:py-32 relative bg-black bg-opacity-30'>
						<img
							src='/Gt_Website-20.png'
							className='absolute object-cover w-screen h-full top-0 z-[-1]'
							alt=''
						/>
						<ScrollTrigger toggleActions='none' scrub={0.5}>
							<Tween from={{ right: '-2rem' }} to={{ right: '1.25rem' }}>
								<img
									src='/Gt_Website-08.png'
									alt=''
									className='absolute max-w-xs h-auto -right-5 md:right-20 -bottom-10'
								/>
							</Tween>
						</ScrollTrigger>
						<div className='p_base grid gap-10'>
							<section className='grid gap-3.5 text-white'>
								<ScrollTrigger>
									<Tween to={{ text: 'Contact Form' }} duration={1}>
										<h1 className='text-4xl font-extrabold' />
									</Tween>
								</ScrollTrigger>
								<Fade>
									<p className='text-lg text-gray-500'>Get in touch with us</p>
								</Fade>
							</section>

							<Fade>
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

									<button className='bg-gray-500 text-white flex items-center gap-x-5 px-7 py-3.5 text-left rounded-lg mt-10'>
										<span>Submit</span>
										<FontAwesomeIcon icon={faArrowRight} />
									</button>
								</form>
							</Fade>
						</div>
					</div>
				)}
				<section id='footer' className='p_base py-20 grid md:grid-cols-3 gap-14 relative'>
					<Fade>
						<div>
							<div className='grid gap-10'>
								<div className='h-[85px] w-[85px] relative'>
									<Image
										src={'/GT-Products-logo.png'}
										layout='fill'
										className='object-contain absolute'
										alt=''
									/>
								</div>
								<p className='text-xl leading-loose text-gray-400'>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, asdsad
									kdnvkasuydtoij kjshdg uiqnscae raeden rtae.
								</p>

								<section className='grid gap-5'>
									<h3 className='text-xl font-bold'>Follow us on</h3>
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
					</Fade>
					<Fade>
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
					</Fade>

					<Fade>
						<div>
							<div className='grid gap-8'>
								<h3 className='text-xl font-bold'>Map location</h3>
								<div className='w-full h-[250px] bg-red-500 rounded-xl' />
								<p className='text-lg text-gray-400 leading-relaxed'>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
								</p>
							</div>
						</div>
					</Fade>
				</section>
				<div className='bg-gray-200'>
					<section className='p_base py-8 flex flex-col sm:flex-row items-center justify-between text-lg'>
						<Fade direction='left' trigger='#footer'>
							<h1>Designed by we3magic</h1>
						</Fade>
						<Fade direction='right' trigger='#footer'>
							<h1>www.we3magic.com</h1>
						</Fade>
					</section>
				</div>
			</footer>
		</div>
	)
}

export default Layout

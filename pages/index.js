import Image from 'next/image'
import { ScrollTrigger, Tween } from 'react-gsap'
import { useState } from 'react'
import Fade from '../components/layout/Fade'
import Layout from '../components/layout/Layout'
import NumberGrid from '../components/layout/NumberGrid'
import TestimonialCarousel from '../components/layout/TestimonialCarousel'
import HomeProduct from '../components/products/HomeProduct'

const Button = ({ _type = 'contained', text, ...rest }) => (
	<button
		className={`${
			_type === 'contained'
				? 'border border-gray-800 bg-gray-800 text-white'
				: 'border border-gray-800'
		} rounded-lg px-5 sm:px-8 py-3.5 font-semibold`}
		{...rest}
	>
		{text}
	</button>
)

const Homepage = () => {
	const [active, setActive] = useState(0)

	return (
		<Layout>
			<main className='grid gap-24 lg:gap-28 pt-24 lg:pt-28'>
				{/* landing section */}
				<div className='banner_grid'>
					<section id='banner-1' className='banner_card bg-gray-200 overflow-hidden'>
						<div className='grid place-items-center w-full h-full relative'>
							<Tween
								from={{ scale: '1.5', opacity: '0' }}
								to={{ scale: '1.0', opacity: '.25' }}
								duration={2}
							>
								<img
									src='/Gt_Website-06.png'
									className='w-full h-full object-cover absolute top-0 left-0 rounded-2xl opacity-25 z-[0]'
									alt=''
								/>
							</Tween>
							<Tween
								from={{ y: '5rem', opacity: '0' }}
								to={{ y: '0rem', opacity: '1' }}
								duration={1.5}
							>
								<div className='grid gap-1.5 sm:gap-3.5 text-center px-5'>
									<h3 className='text-xl text-gray-400'>One of the</h3>
									<h2 className='text-2xl sm:text-3xl text-gray-500'>
										largest makers of
									</h2>
									<h1 className='text-3xl leading-tight sm:text-5xl font-extrabold px-3.5 sm:leading-normal sm:px-0'>
										dhoops & agarbattis
									</h1>
									<div className='flex items-center justify-center gap-3.5 sm:gap-5 mt-10 relative'>
										<Button _type='outlined' text='Lorem ipsum' />
										<Button text='Lorem ipsum' />
										<img
											src='/Gt_Website-05.png'
											alt=''
											className='max-w-[100px] mr-1.5 h-auto absolute -top-28 z-[-1]'
										/>
									</div>
								</div>
							</Tween>
						</div>
					</section>

					<ScrollTrigger start='-300px center' end='bottom center'>
						<Tween
							from={{ x: '100px', opacity: 0 }}
							duration={1.75}
							to={{ x: '0px', opacity: 1 }}
						>
							<section
								id='banner-2'
								className='banner_card bg-[#252525] relative overflow-hidden'
							>
								<Fade>
									<section className='grid gap-5 place-items-start'>
										<h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
											Agarbatti
										</h2>
										<p className='text-gray-400 text-md'>Incense sticks</p>
										<button className='bg-white bg-opacity-25 hover:bg-opacity-75 hover:text-black transition-all text-white px-8 py-2.5 rounded-full z-[10]'>
											Show all
										</button>
									</section>
								</Fade>
								<img
									src={'/Gt_Website-07.png'}
									className='max-w-[600px] w-full h-auto object-contain absolute top-28 right-5'
									alt=''
								/>
							</section>
						</Tween>
					</ScrollTrigger>

					<ScrollTrigger start='-300px center' end='bottom center' trigger='#banner-2'>
						<Tween
							from={{ x: '100px', opacity: 0 }}
							duration={2}
							to={{ x: '0px', opacity: 1 }}
						>
							<section
								id='banner-3'
								className='banner_card bg-orange-200 overflow-hidden xl:overflow-visible'
							>
								<Fade>
									<section className='grid gap-5 place-items-start relative'>
										<h2 className='text-3xl sm:text-4xl font-extrabold'>
											Camphor
										</h2>
										<button className='bg-white hover:bg-opacity-100 transition-all bg-opacity-75 px-8 py-2.5 rounded-full'>
											Show all
										</button>

										<Fade>
											<img
												src={'/Gt_Website-09.png'}
												className='max-w-[450px] w-full h-auto object-contain absolute top-12 md:top-[6.5vh] -right-16 md:-right-24'
												alt=''
											/>
										</Fade>
									</section>
								</Fade>
							</section>
						</Tween>
					</ScrollTrigger>

					<ScrollTrigger start='-300px center' end='bottom center' trigger='#banner-3'>
						<Tween
							from={{ x: '100px', opacity: 0 }}
							duration={2.25}
							to={{ x: '0px', opacity: 1 }}
						>
							<section id='banner-4' className='banner_card bg-red-600'>
								<Fade>
									<section className='grid gap-5 place-items-start'>
										<h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
											Sambrani cups
										</h2>
										<p className='text-gray-200 text-md'>Incense sticks</p>
										<button className='bg-white bg-opacity-25 text-white hover:bg-opacity-75 hover:text-black transition-all px-8 py-2.5 rounded-full'>
											Show all
										</button>
									</section>
								</Fade>
							</section>
						</Tween>
					</ScrollTrigger>

					<ScrollTrigger start='-300px center' end='bottom center' trigger='#banner-3'>
						<Tween
							from={{ x: '100px', opacity: 0 }}
							duration={2.5}
							to={{ x: '0px', opacity: 1 }}
						>
							<section className='banner_card bg-black relative overflow-hidden'>
								<Image
									src={'/Gt_Website-37.jpg'}
									layout='fill'
									alt=''
									className='absolute opacity-50'
								/>
								<Fade>
									<section className='grid gap-2 place-items-start'>
										<p className='text-gray-500 text-2xl'>Sambrani</p>
										<h2 className='text-3xl sm:text-4xl font-extrabold text-white'>
											Dhoops
										</h2>
										<button className='bg-white bg-opacity-25 text-white px-8 py-2.5 rounded-full mt-8 hover:bg-opacity-75 hover:text-black transition-all'>
											Show all
										</button>
									</section>
								</Fade>
							</section>
						</Tween>
					</ScrollTrigger>
				</div>

				<div className='relative'>
					<ScrollTrigger
						start='-200px center'
						end='bottom center'
						scrub={0.35}
						toggleActions='none'
					>
						<Tween from={{ x: '-25px' }} to={{ x: '25px' }} duration={2.5}>
							<img
								src='/Gt_Website-10.png'
								className='max-w-xs sm:max-w-sm w-full h-auto absolute -top-3.5 -left-32 lg:top-0 lg:left-0 opacity-10 lg:opacity-20 z-[-1]'
								alt=''
							/>
						</Tween>
					</ScrollTrigger>
					<ScrollTrigger
						start='-200px center'
						end='bottom center'
						scrub={0.35}
						toggleActions='none'
					>
						<Tween from={{ x: '15px' }} to={{ x: '-15px' }} duration={2.5}>
							<img
								src='/Gt_Website-11.png'
								className='max-w-xl w-full h-auto absolute -right-36 -bottom-32 lg:right-0 z-[-1]'
								alt=''
							/>
						</Tween>
					</ScrollTrigger>
					<ScrollTrigger
						start='-200px center'
						end='bottom center'
						scrub={0.35}
						toggleActions='none'
					>
						<Tween from={{ x: '20px' }} to={{ x: '-20px' }} duration={3}>
							<img
								src='/Gt_Website-13.png'
								className='w-[100px] lg:w-[125px] h-auto absolute right-[12rem] lg:right-[27.5rem] -bottom-20 z-[-1]'
								alt=''
							/>
						</Tween>
					</ScrollTrigger>
					<div className='max-w-screen-sm mx-auto px-5'>
						<div className='grid place-items-center text-center gap-8'>
							<ScrollTrigger start='-200px center' end='bottom center'>
								<Tween
									from={{ y: '3.5rem', opacity: '0' }}
									to={{ y: '0rem', opacity: '1' }}
									duration={1.5}
								>
									<section>
										<p className='text-lg text-gray-400'>Product range</p>
										<h2 className='text-4xl font-extrabold'>About us</h2>
									</section>
									<p
										id='index-2b'
										className='text-xl leading-loose text-gray-500'
									>
										We manufacture a wide range of incense products including
										Agarbathis, Dhoops, Sambrani&apos;s. With a strong lineage
										of good quality products that is not just accepted but also
										revered by a wide variety of users, GT is one of the most
										trusted and well known incense brands in India.
									</p>
									<p className='text-xl leading-loose text-gray-500'>
										Some of our key products have managed to establish
										themselves as stand-alone brands too.
									</p>
									<button className='bg-gray-800 text-white px-10 py-3.5 rounded-xl font-semibold mt-5'>
										Lorem ipsum
									</button>
								</Tween>
							</ScrollTrigger>
						</div>
					</div>
				</div>

				<div className='grid gap-12 md:gap-20' id='home-products'>
					<ScrollTrigger
						start='-200px center'
						end='bottom center'
						trigger='#home-products'
					>
						<Tween
							from={{ y: '2.5rem', opacity: '0' }}
							to={{ y: '0rem', opacity: '1' }}
							duration={1.5}
						>
							<section className='text-center'>
								<h3 className='text-lg md:text-xl text-gray-400'>Product range</h3>
								<h2 className='text-3xl md:text-4xl font-extrabold'>
									Our top sellers
								</h2>
							</section>
						</Tween>
					</ScrollTrigger>

					<div className='landing_grid__3'>
						{Array.from(Array(8).keys()).map((i) => (
							<HomeProduct key={i} id={i} />
						))}
					</div>
				</div>

				<div className='p_base'>
					<ScrollTrigger start='-200px center' end='bottom center' trigger='#why-us'>
						<Tween
							from={{ y: '2.5rem', opacity: '0' }}
							duration={1.5}
							to={{ y: '0rem', opacity: '1' }}
						>
							<section
								id='why-us'
								className='overflow-hidden py-20 px-10 bg-gray-100 rounded-xl grid justify-center gap-5'
							>
								<h2 className='text-4xl font-extrabold'>Why us?</h2>
								<p className='text-xl max-w-2xl leading-loose text-gray-400 z-[1]'>
									Our promise is to deliver premium quality products with
									freshness, rich aroma, long shelf life and purity.
								</p>
								<button className='justify-self-start bg-gray-800 text-white px-7 py-3.5 rounded-xl font-semibold mt-5 z-[1] shadow-xl hover:shadow-none transition-all'>
									Lorem ipsum
								</button>

								<img
									src={'/Gt_Website-14.png'}
									className='w-[250px] h-auto absolute bottom-0 hidden lg:block'
									alt=''
								/>
								<img
									src={'/Gt_Website-16.png'}
									className='w-[350px] h-auto absolute -bottom-24 -right-10 hidden lg:block'
									alt=''
								/>
								<ScrollTrigger
									start='-200px center'
									end='bottom center'
									scrub={0.5}
									toggleActions='none'
								>
									<Tween from={{ x: '25px' }} to={{ x: '0px' }}>
										<div className='absolute w-full lg:-left-10 bottom-0 grid place-items-center'>
											<img
												src={'/Gt_Website-15.png'}
												className='w-[300px] h-auto'
												alt=''
											/>
										</div>
									</Tween>
								</ScrollTrigger>
							</section>
						</Tween>
					</ScrollTrigger>
				</div>

				<TestimonialCarousel />

				<div className='relative'>
					<img
						src='/Gt_Website-17.png'
						className='w-[200px] lg:w-[250px] h-auto absolute -left-5 lg:left-24 -top-36 lg:-top-40'
						alt=''
					/>
					<img
						src='/Gt_Website-18.png'
						className='w-[250px] h-auto absolute -right-10 md:right-10 -bottom-56 md:-bottom-52 z-[-1]'
						alt=''
					/>
					<div className='max-w-screen-xl mx-auto'>
						<NumberGrid
							data={[
								{ label: 'Man Power', value: 300, icon: '+' },
								{ label: 'Total Utilisation', value: 80, icon: '%' },
								{ label: "Sku's", value: 75, icon: '+' },
								{ label: 'Success rate', value: 100, icon: '%' },
							]}
						/>
					</div>
				</div>

				<div>
					<div className='bg-[#d82a44] py-24 md:py-32'>
						<div
							className='max-w-screen-xl mx-auto grid place-items-center relative'
							id='countries'
						>
							<Image
								src='/Gt_Website-19.png'
								layout='fill'
								className='w-full h-auto absolute opacity-20 object-cover z-0'
								alt=''
							/>
							<ScrollTrigger
								start='-300px center'
								end='bottom center'
								trigger='#countries'
							>
								<Tween
									from={{ opacity: '0', y: '3.5rem' }}
									to={{ opacity: '1', y: '0rem' }}
									duration={1.5}
								>
									<div className='p_base grid place-items-center gap-12 z-[1]'>
										<h1 className='text-3xl md:text-4xl font-extrabold text-white text-center leading-normal'>
											We have customers worldwide
										</h1>
										<div className='overflow-x-scroll hide-scrollbar w-full'>
											<div className='flex justify-center gap-5'>
												{[
													'Australia',
													'Mauritius',
													'Singapore',
													'Malaysia',
													'France',
													'SouthAfrica',
													'UAE',
												].map((item, i) => (
													<button
														key={i}
														className={`text-white px-5 py-2.5 rounded ${
															i === active
																? 'bg-white bg-opacity-25'
																: ''
														}`}
														onClick={() => setActive(i)}
													>
														{item}
													</button>
												))}
											</div>
										</div>
										<p className='max-w-xl text-center text-lg text-red-50 leading-loose'>
											The manufacturing division was started as a vision of
											our father Late shri. Kanti Doshi, to provide steady
											income to economically backward class society. Today we
											have 3 fully owned manufacturing plants, and multiple
											jobwork model units under our portfolio.
										</p>
										<button className='bg-white px-8 py-3.5 font-semibold rounded-lg text-red-500 shadow-xl shadow-red-700 hover:shadow-none'>
											Lorem ipsum
										</button>
									</div>
								</Tween>
							</ScrollTrigger>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export default Homepage

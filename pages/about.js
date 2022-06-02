import React from 'react'
import Layout from '../components/layout/Layout'
import Image from 'next/image'
import NumberGrid from '../components/layout/NumberGrid'
import Fade from '../components/layout/Fade'
import { Tween } from 'react-gsap'

const About = () => {
	return (
		<Layout>
			<div className='relative px-5 md:px-0'>
				<Tween
					from={{ opacity: '0', scale: '1.25' }}
					to={{ opacity: '.25', scale: '1.0' }}
					duration={2}
				>
					<img
						src={'/Gt_Website-22.png'}
						className='w-full h-full absolute left-0 top-0 object-cover opacity-25'
						alt=''
					/>
				</Tween>
				<Fade>
					<section className='max-w-lg mx-auto grid place-items-center text-center gap-y-5 pt-40 pb-24 md:py-56'>
						<h1 className='text-4xl font-extrabold'>About us</h1>
						<p className='text-lg leading-loose text-gray-400'>
							The manufacturing division was started as a vision of our father Late
							shri. Kanti Doshi, to provide steady income to economically backward
							class society. Today we have 3 fully owned manufacturing plants, and
							multiple jobwork model units under our portfolio.
						</p>
						<button className='border-2 border-gray-800 px-10 py-3.5 font-semibold rounded-lg mt-5'>
							Lorem ipsum
						</button>
					</section>
				</Fade>
			</div>

			<div className='relative text-white'>
				<Image
					src={'/Gt_Website-23.png'}
					layout='fill'
					className='absolute object-cover z-[-1]'
					alt=''
				/>
				<div className='py-20 md:py-32 grid gap-y-24 px-5 md:px-0'>
					<Fade>
						<section className='max-w-screen-sm mx-auto text-center grid gap-y-10 md:gap-y-5'>
							<h1 className='text-2xl md:text-4xl font-extrabold leading-relaxed'>
								One of the largest manufacturer of Sambrani Dhoops &
								Agarbathi&apos;s
							</h1>
							<p className='text-lg leading-loose text-gray-300'>
								We manufacture a wide range of incense products including
								Agarbathis, Dhoops, Sambrani&apos;s. With a strong lineage of good
								quality products that is not just accepted but also revered by a
								wide variety of users, GT is one of the most trusted and wellknown
								incense brands in India. Some key products have managed to establish
								themselves as stand-alone brands too.
							</p>
						</section>
					</Fade>
					<div className='max-w-screen-xl mx-auto w-full'>
						<Fade>
							<NumberGrid
								data={[
									{ label: 'Man Power', value: 300, icon: '+' },
									{ label: 'Total Utilisation', value: 80, icon: '%' },
									{ label: "Sku's", value: 75, icon: '+' },
									{ label: 'Success rate', value: 100, icon: '%' },
								]}
							/>
						</Fade>
					</div>
				</div>
			</div>

			<div className='grid place-items-center gap-y-20 py-20 px-5 md:px-0' id='mission'>
				<section className='max-w-screen-sm mx-auto'>
					<Fade trigger='#mission'>
						<img
							src='/Gt_Website-24.png'
							className='object-contain w-full h-auto'
							alt=''
						/>
					</Fade>
				</section>
				<Fade>
					<section className='max-w-lg mx-auto text-center grid gap-y-5 place-items-center'>
						<h1 className='text-3xl md:text-4xl font-extrabold'>
							Our Mission & Vision
						</h1>
						<p className='text-lg leading-loose text-gray-400'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
							volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
							Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse mo.
						</p>
						<button className='bg-gray-800 text-white px-10 py-3.5 rounded-full font-semibold mt-5 shadow-xl hover:shadow-none transition-all'>
							Lorem ipsum
						</button>
					</section>
				</Fade>
			</div>

			<div className='max-w-screen-xl mx-auto base-grid auto-rows-[475px] gap-10 px-5'>
				<Fade>
					<section className='bg-[#262626] px-10 py-14 text-white rounded-xl'>
						<h2 className='text-2xl md:text-3xl font-extrabold'>Agarbathi</h2>
						<p className='text-white text-opacity-60 leading-loose mt-5'>
							With a team of experienced hands, we have multiple units to manufacture
							both dipped (branded) bathis and raw Agarbathi&apos;s for trade.
						</p>
						<button className='px-8 py-2.5 bg-white bg-opacity-25 text-white rounded-full mt-16 hover:bg-opacity-75 hover:text-black transition-all'>
							Show all
						</button>
					</section>
				</Fade>
				<Fade>
					<section className='bg-gradient-to-r from-[#ff5a45] to-[#fb7c4b] px-10 py-14 text-white rounded-xl'>
						<h2 className='text-2xl md:text-3xl font-extrabold'>
							Sambrani <br className='hidden lg:block' /> dhoop - cups
						</h2>
						<p className='text-white text-opacity-75 leading-loose mt-5'>
							With an experience of over 2 decades and a plant capacity of 100
							Mts/month. We are proud to be one of the largest manufacturing unit in
							this field.
						</p>
						<button className='px-8 py-2.5 bg-white bg-opacity-25 text-white rounded-full mt-8 hover:bg-opacity-75 hover:text-black transition-all'>
							Show all
						</button>
					</section>
				</Fade>
				<Fade>
					<section className='bg-[#d82a44] sm:col-span-2 xl:col-span-1 px-10 py-14 text-white rounded-xl'>
						<h2 className='text-2xl md:text-3xl font-extrabold'>Polymers</h2>
						<p className='text-white text-opacity-60 leading-loose mt-5'>
							We have world class machinery, capable of printing complex job of 8
							colours, along with supplying in various forms as per client needs.
						</p>
						<button className='px-8 py-2.5 bg-white bg-opacity-25 text-white rounded-full mt-[4.5rem] hover:bg-opacity-75 hover:text-black transition-all'>
							Show all
						</button>
					</section>
				</Fade>
			</div>

			<div className='relative'>
				<div className='hidden md:block w-full h-[1px] bg-[#bf9f7f] absolute left-0 top-[7.15rem] z-[-1]' />
				<div className='about_footer_grid'>
					<Fade direction='left'>
						<h1 className='self-center text-4xl font-extrabold leading-snug relative after:content-[""] after:w-screen after:border-t-[2.5px] after:absolute after:-right-5 after:top-[1.55rem] after:z-[-1] after:border-[#bf9f7f] md:after:hidden'>
							<span className='bg-white px-2.5 md:px-0'>
								Our <br className='hidden md:block' /> brands
							</span>
						</h1>
					</Fade>

					<Fade direction='left'>
						<section>
							<h2>Dhoops</h2>
							<div className='about_footer_section'>
								{[
									'Five star',
									'Gold',
									'Sugam',
									'Ghajini',
									'Kumkum',
									'Pearl White',
									'Black Pearl',
									'Supreme',
								].map((item, i) => (
									<div key={i}>{item}</div>
								))}
							</div>
						</section>
					</Fade>

					<Fade direction='left'>
						<section>
							<h2>Cups</h2>
							<div className='about_footer_section'>
								{[
									'Flower pot',
									'Black pearl',
									'Vedanta mini',
									'Sugam Multicolour',
									'Cups',
									'Shakti loban cup',
									'GTCUPS-Multi colour',
								].map((item, i) => (
									<div key={i}>{item}</div>
								))}
							</div>
						</section>
					</Fade>

					<Fade direction='left'>
						<section>
							<h2>Agarbathis</h2>
							<div className='about_footer_section'>
								{[
									'Sai Ashirwad',
									'Sugam',
									'Kumkum',
									'Sugam 5 in1',
									'Floral collections',
									'Temple collection',
									'Rainbow collection 4in1',
									'108 Agarbathi',
									'Royal Series',
								].map((item, i) => (
									<div key={i}>{item}</div>
								))}
							</div>
						</section>
					</Fade>
				</div>

				<Image
					src={'/Gt_Website-22.png'}
					layout='fill'
					className='absolute bottom-0 rotate-180 z-[-1] opacity-20 object-cover'
					alt=''
				/>
			</div>

			<div className='grid grid-cols-2 lg:grid-cols-4'>
				{Array.from(Array(8).keys()).map((i) => (
					<section
						key={i}
						className='w-full aspect-square outline outline-1 outline-gray-300 bg-gray-100'
					>
						<img src={`/${i + 1}.jpg`} className='w-full h-full object-cover' alt='' />
					</section>
				))}
			</div>
		</Layout>
	)
}

export default About

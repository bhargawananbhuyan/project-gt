import React from 'react'
import Fade from '../components/layout/Fade'
import Layout from '../components/layout/Layout'
import NumberGrid from '../components/layout/NumberGrid'

const Last = () => {
	React.useEffect(() => {
		if (window === undefined) return

		const path1Ref = document.querySelector('#path__1')

		const length = path1Ref.getTotalLength()
		path1Ref.style.strokeDasharray = length
		path1Ref.style.strokeDashoffset = length

		document.addEventListener('scroll', () => {
			const scrollpercent =
				(document.body.scrollTop + document.documentElement.scrollTop) /
				(document.documentElement.scrollHeight - document.documentElement.clientHeight)

			const draw = length * scrollpercent * 80
			path1Ref.style.strokeDashoffset = length - draw
		})
	}, [])

	React.useEffect(() => {
		if (window === undefined) return

		const path2Ref = document.querySelector('#path__2')

		const length = path2Ref.getTotalLength()
		path2Ref.style.strokeDasharray = length
		path2Ref.style.strokeDashoffset = length

		document.addEventListener('scroll', () => {
			const scrollpercent =
				(document.body.scrollTop + document.documentElement.scrollTop) /
				(document.documentElement.scrollHeight - document.documentElement.clientHeight)

			const draw = length * scrollpercent * 10
			path2Ref.style.strokeDashoffset = draw - length
		})
	}, [])

	React.useEffect(() => {
		if (window === undefined) return

		const path3Ref = document.querySelector('#path__3')

		const length = path3Ref.getTotalLength()
		path3Ref.style.strokeDasharray = length
		path3Ref.style.strokeDashoffset = length

		document.addEventListener('scroll', () => {
			const scrollpercent =
				(document.body.scrollTop + document.documentElement.scrollTop) /
				(document.documentElement.scrollHeight - document.documentElement.clientHeight)

			const draw = length * scrollpercent * 10
			path3Ref.style.strokeDashoffset = length - draw
		})
	}, [])

	return (
		<Layout footerBg='light'>
			<div className='relative bg-[#d82a44] py-10'>
				<div className='top-14 -right-[45%] rotate-180 absolute w-full'>
					<svg
						id='Layer_1'
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1041.882 137.792'
						className='overflow-hidden'
					>
						<path
							id='path__1'
							className='cls-1'
							d='M48.373,121.712H936.494A57.014,57.014,0,0,0,993.509,64.7V16.079'
						/>
					</svg>
				</div>
			</div>
			<article>
				<article className='bg-[#d82a44] pt-40 pb-36 md:pt-52 md:pb-60'>
					<section className='max-w-screen-md mx-auto text-center'>
						<div className='max-w-xl mx-auto text-white px-5 md:px-0'>
							<Fade duration={1}>
								<h1 className='text-3xl sm:text-4xl font-extrabold'>
									About GT Groups
								</h1>
							</Fade>
							<Fade duration={1.5}>
								<p className='text-lg leading-relaxed md:text-xl md:leading-loose mt-8'>
									GT GROUP is a conglomerate Business house, whose core Purpose is
									to spread happiness along its path of Growth. In its 55 years of
									on-going life, we have ventured/diversified into various
									industries.
								</p>
							</Fade>
						</div>
						<Fade duration={2}>
							<section className='w-full flex items-center gap-y-3.5 flex-wrap justify-center my-14'>
								{['TRADE', 'MANUFACTURE', 'REALTY', 'EDUCATION', 'LEASE'].map(
									(item, i) => (
										<div
											key={i}
											className='flex items-start text-white font-bold text-xl'
										>
											<span className={`px-5`}>{item}</span>
											<span>{item !== 'LEASE' ? '|' : ''}</span>
										</div>
									)
								)}
							</section>
						</Fade>
					</section>
					<div className='flex items-center justify-center gap-5 max-w-screen-lg mx-auto flex-wrap'>
						{Array.from(Array(7).keys()).map((i) => (
							<Fade key={i} duration={(i + 1) * 0.5}>
								<section className='h-[125px] w-[125px] bg-white bg-opacity-10 rounded-xl'></section>
							</Fade>
						))}
					</div>
					<div className='max-w-xl mx-auto mt-24 px-5'>
						<section className='bg-white bg-opacity-10 text-white p-16 text-center rounded-xl relative'>
							<Fade duration={1}>
								<h2 className='text-2xl font-bold'>1967 - The year it all began</h2>
							</Fade>
							<Fade duration={1.5}>
								<p className='text-lg md:text-xl md:leading-loose text-white text-opacity-60 mt-10'>
									With a mere Rs. 701/- in his pocket, Mr. Kanti Doshi started his
									Entrepreneural journey in a oce space of 15 x 15 sq.ft.
								</p>
							</Fade>

							<Fade duration={1}>
								<img
									src='/Gt_Website-27.png'
									className='w-[250px] h-auto absolute -bottom-10 -left-36'
									alt=''
								/>
							</Fade>
						</section>

						<section className='mt-8 grid grid-rows-2 bg-white bg-opacity-10 text-white rounded-xl'>
							<Fade>
								<section className='row-start-1 row-end-1 border-b-[12px] border-[#d82a44] border-opacity-50'></section>
							</Fade>
							<section className='row-start-2 row-end-2 p-14 text-center'>
								<Fade>
									<h2 className='text-xl md:text-2xl md:leading-loose font-bold leading-relaxed'>
										&quot;Food as a business, will never stop. It will run 24/7
										- 365 day - Till the world dies&quot;
									</h2>
								</Fade>
								<Fade duration={1.5}>
									<p className='text-xl mt-8'>- Kanti Doshi</p>
								</Fade>
							</section>
						</section>
					</div>
					<div className='relative py-10'>
						<div className='absolute w-full -left-[45%]'>
							<svg
								id='Layer_1'
								data-name='Layer 1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 1041.882 137.792'
								className='overflow-hidden'
							>
								<path
									id='path__2'
									className='cls-1'
									d='M48.373,121.712H936.494A57.014,57.014,0,0,0,993.509,64.7V16.079'
								/>
							</svg>
						</div>
					</div>

					<div className='max-w-screen-xl mx-auto text-center md:text-left px-5 text-white mt-24 md:mt-64 grid md:grid-cols-3 gap-14 md:gap-10'>
						{Array.from(Array(3).keys()).map((i) => (
							<Fade key={i} duration={(i + 1) * 0.5}>
								<section>
									<h2 className='text-4xl font-extrabold'>1964</h2>
									<p className='text-xl leading-relaxed mt-8'>
										Set foot in Chennai (then Madras) as an employee in a Kirana
										shop.
									</p>
								</section>
							</Fade>
						))}
					</div>

					<div className='relative pt-24 pb-72'>
						<div className='absolute w-full -right-[45%] rotate-180'>
							<svg
								id='Layer_1'
								data-name='Layer 1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 1041.882 137.792'
								className='overflow-hidden'
							>
								<path
									id='path__3'
									className='cls-1'
									d='M48.373,121.712H936.494A57.014,57.014,0,0,0,993.509,64.7V16.079'
								/>
							</svg>
						</div>
					</div>

					<div className='text-center md:text-left px-5 max-w-screen-xl mx-auto grid md:grid-cols-2 text-white gap-y-14 gap-x-24'>
						<Fade>
							<section>
								<h2 className='text-3xl font-extrabold'>Our Vision</h2>
								<p className='text-xl leading-loose mt-5'>
									To be amongst the “worlds happiest” business houses, touching
									lives of people worldwide, and known for its Reach, speed, size
									and innovations
								</p>
							</section>
						</Fade>
						<Fade duration={1.5}>
							<section>
								<h2 className='text-3xl font-extrabold'>Our Philosophy</h2>
								<p className='text-xl leading-loose mt-5'>
									The ultimate purpose of growth at GT is to SPREAD HAPPINESS by
									working towards well being, wealth creation and holistic growth
									for all its stakeholders
								</p>
							</section>
						</Fade>
					</div>

					<section className='px-5 max-w-screen-sm mx-auto mt-20 md:mt-44 text-center pb-10'>
						<Fade>
							<h2 className='text-2xl leading-loose md:text-3xl font-bold text-white text-opacity-50'>
								Pioneer in Domestic & International Market
							</h2>
						</Fade>
						<Fade duration={1.5}>
							<h1 className='text-3xl md:text-6xl font-extrabold text-white mt-5'>
								for 50 Golden Years
							</h1>
						</Fade>
					</section>
				</article>
				<div className='max-w-screen-lg w-full mx-auto mt-[-3.5rem] relative grid place-items-center'>
					<Fade duration={2}>
						<img
							src='/Gt_Website-29.png'
							className='w-auto h-[600px] absolute object-contain'
							alt=''
						/>
					</Fade>
				</div>

				<section className='mt-48 md:mt-[21rem]'>
					<div className='max-w-screen-xl mx-auto w-full'>
						<Fade>
							<NumberGrid
								large
								data={[
									{
										label: (
											<span>
												Golden years <br /> in business
											</span>
										),
										value: '50',
										icon: '+',
									},
									{
										label: (
											<span>
												Business <br /> verticals
											</span>
										),
										value: '08',
										icon: '+',
									},
									{
										label: (
											<span>
												Countries <br /> Spread
											</span>
										),
										value: '10',
										icon: '+',
									},
									{
										label: (
											<span>
												Awards <br /> achieved
											</span>
										),
										value: '20',
										icon: '+',
									},
								]}
							/>
						</Fade>
					</div>
				</section>

				<div className='p_base'>
					<section className='mt-24 md:mt-36 md:mb-10 bg-gray-100 px-8 py-16 md:p-24 rounded-xl'>
						<Fade>
							<h1 className='text-2xl md:text-3xl max-w-screen-md mx-auto text-center leading-relaxed text-gray-500'>
								Since 1967,{' '}
								<strong className='text-[#d82a44]'>General Traders</strong>{' '}
								<strong className='text-black'>
									has been one of the largest and fastest-growing conglomerates in
									India
								</strong>{' '}
								with the verticals below.
							</h1>
						</Fade>

						<section className='last_brands_grid auto-rows-[150px] md:auto-rows-[200px] mt-10'>
							{Array.from(Array(6).keys()).map((i) => (
								<Fade key={i}>
									<div className='relative grid place-items-center'>
										<img
											src={`/Gt_Website-3${i}.png`}
											className='absolute object-contain w-[125px] md:w-[200px] h-auto'
											alt=''
										/>
									</div>
								</Fade>
							))}
						</section>
					</section>
				</div>
			</article>
		</Layout>
	)
}

export default Last

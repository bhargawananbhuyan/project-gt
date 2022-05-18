import React from 'react'
import Layout from '../components/layout/Layout'
import NumberGrid from '../components/layout/NumberGrid'

const Last = () => {
	return (
		<Layout footerBg='light'>
			<article>
				<article className='bg-[#d82a44] pt-52 pb-60'>
					<section className='max-w-screen-sm mx-auto text-center'>
						<div className='max-w-xl mx-auto text-white px-5 md:px-0'>
							<h1 className='text-3xl sm:text-4xl font-extrabold'>About GT Groups</h1>
							<p className='text-lg leading-relaxed md:text-xl md:leading-loose mt-8'>
								GT GROUP is a conglomerate Business house, whose core Purpose is to
								spread happiness along its path of Growth. In its 55 years of
								on-going life, we have ventured/diversified into various industries.
							</p>
						</div>
						<section className='flex items-center gap-y-3.5 flex-wrap justify-center my-14'>
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
					</section>
					<div className='flex items-center justify-center gap-5 max-w-screen-lg mx-auto flex-wrap'>
						{Array.from(Array(7).keys()).map((i) => (
							<section
								key={i}
								className='h-[125px] w-[125px] bg-white bg-opacity-10 rounded-xl'
							></section>
						))}
					</div>

					<div className='max-w-xl mx-auto mt-24 px-5'>
						<section className='bg-white bg-opacity-10 text-white p-16 text-center rounded-xl relative'>
							<h2 className='text-2xl font-bold'>1967 - The year it all began</h2>
							<p className='text-lg md:text-xl text-white text-opacity-60 mt-10 leading-loose'>
								With a mere Rs. 701/- in his pocket, Mr. Kanti Doshi started his
								Entrepreneural journey in a oce space of 15 x 15 sq.ft.
							</p>

							<img
								src='/Gt_Website-27.png'
								className='w-[250px] h-auto absolute -bottom-10 -left-36'
								alt=''
							/>
						</section>

						<section className='mt-8 grid grid-rows-2 bg-white bg-opacity-10 text-white rounded-xl'>
							<section className=' row-start-1 row-end-1 border-b-[12px] border-[#d82a44] border-opacity-50'></section>
							<section className='row-start-2 row-end-2 p-14 text-center'>
								<h2 className='text-xl md:text-2xl font-bold leading-relaxed'>
									&quot;Food as a business, will never stop. It will run 24/7 -
									365 day - Till the world dies&quot;
								</h2>
								<p className='text-xl mt-8'>- Kanti Doshi</p>
							</section>
						</section>
					</div>

					<div className='max-w-screen-xl mx-auto text-center md:text-left px-5 text-white my-64 grid md:grid-cols-3 gap-10'>
						{Array.from(Array(3).keys()).map((i) => (
							<section key={i}>
								<h2 className='text-4xl font-extrabold'>1964</h2>
								<p className='text-xl leading-relaxed mt-8'>
									Set foot in Chennai (then Madras) as an employee in a Kirana
									shop.
								</p>
							</section>
						))}
					</div>

					<div className='text-center md:text-left px-5 max-w-screen-xl mx-auto grid md:grid-cols-2 text-white gap-y-10 gap-x-24'>
						<section>
							<h2 className='text-3xl font-extrabold'>Our Vision</h2>
							<p className='text-xl leading-loose mt-5'>
								To be amongst the “worlds happiest” business houses, touching lives
								of people worldwide, and known for its Reach, speed, size and
								innovations
							</p>
						</section>
						<section>
							<h2 className='text-3xl font-extrabold'>Our Philosophy</h2>
							<p className='text-xl leading-loose mt-5'>
								The ultimate purpose of growth at GT is to SPREAD HAPPINESS by
								working towards well being, wealth creation and holistic growth for
								all its stakeholders
							</p>
						</section>
					</div>

					<section className='px-5 max-w-screen-sm mx-auto mt-44 text-center pb-10'>
						<h2 className='text-2xl leading-loose md:text-3xl font-bold text-white text-opacity-50'>
							Pioneer in Domestic & International Market
						</h2>
						<h1 className='text-3xl md:text-6xl font-bold text-white mt-5'>
							for 50 Golden Years
						</h1>
					</section>
				</article>
				<div className='max-w-screen-lg w-full mx-auto mt-[-3.5rem] relative grid place-items-center'>
					<img
						src='/Gt_Website-29.png'
						className='w-auto h-[600px] absolute object-contain'
						alt=''
					/>
				</div>

				<section className='mt-[21rem]'>
					<div className='max-w-screen-xl mx-auto w-full'>
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
					</div>
				</section>

				<section className='mt-36 mb-10 bg-gray-100 max-w-screen-xl mx-auto p-10 md:p-24 rounded-xl'>
					<h1 className='text-3xl max-w-screen-md mx-auto text-center leading-relaxed text-gray-500'>
						Since 1967, <strong className='text-[#d82a44]'>General Traders</strong>{' '}
						<strong className='text-black'>
							has been one of the largest and fastest-growing conglomerates in India
						</strong>{' '}
						with the verticals below.
					</h1>

					<section className='last_brands_grid auto-rows-[200px] mt-10'>
						{Array.from(Array(6).keys()).map((i) => (
							<div key={i} className='relative grid place-items-center'>
								<img
									src={`/Gt_Website-3${i}.png`}
									className='absolute object-contain w-[200px] h-auto'
									alt=''
								/>
							</div>
						))}
					</section>
				</section>
			</article>
		</Layout>
	)
}

export default Last
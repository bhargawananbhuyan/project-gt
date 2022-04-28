import Layout from '../components/layout/Layout'

const Button = ({ _type = 'contained', text, ...rest }) => (
	<button
		className={`${
			_type === 'contained'
				? 'border border-gray-800 bg-gray-800 text-white'
				: 'border border-gray-800'
		} rounded-lg px-8 py-3.5 font-semibold`}
		{...rest}
	>
		{text}
	</button>
)

const Homepage = () => {
	return (
		<Layout>
			<main className='grid gap-24'>
				{/* landing section */}
				<div className='landing_grid__2 px-10'>
					<section className='col-start-1 col-span-3 row-start-1 row-span-2 bg-gray-200'>
						<div className='grid place-items-center w-full h-full'>
							<div className='grid gap-3.5 text-center'>
								<h3 className='text-xl text-gray-400'>One of the</h3>
								<h2 className='text-3xl text-gray-500'>largest makers of</h2>
								<h1 className='text-5xl font-bold'>dhoops & agarbattis</h1>
								<div className='flex items-center justify-center gap-3.5 mt-10'>
									<Button _type='outlined' text='Lorem ipsum' />
									<Button text='Lorem ipsum' />
								</div>
							</div>
						</div>
					</section>

					<section className='col-start-1 row-start-3 row-span-2 bg-gray-800'>
						<section className='grid gap-5 place-items-start'>
							<h2 className='text-4xl font-bold text-white'>Agarbatti</h2>
							<p className='text-gray-400 text-md'>Incense sticks</p>
							<button className='bg-white bg-opacity-25 text-white px-8 py-2.5 rounded-full'>
								Show all
							</button>
						</section>
					</section>
					<section className='col-start-2 row-start-3 bg-orange-200'>
						<section className='grid gap-5 place-items-start'>
							<h2 className='text-4xl font-bold '>Camphor</h2>
							<button className='bg-white bg-opacity-75 px-8 py-2.5 rounded-full'>
								Show all
							</button>
						</section>
					</section>
					<section className='col-start-2 row-start-4 bg-red-600'>
						<section className='grid gap-5 place-items-start'>
							<h2 className='text-4xl font-bold text-white'>Sambrani cups</h2>
							<p className='text-gray-200 text-md'>Incense sticks</p>
							<button className='bg-white bg-opacity-25 text-white px-8 py-2.5 rounded-full'>
								Show all
							</button>
						</section>
					</section>
					<section className='col-start-3 row-start-3 row-span-2 bg-gray-800'>
						<section className='grid gap-2 place-items-start'>
							<p className='text-gray-500 text-2xl'>Sambrani</p>
							<h2 className='text-4xl font-bold text-white'>Dhoops</h2>
							<button className='bg-white bg-opacity-25 text-white px-8 py-2.5 rounded-full mt-8'>
								Show all
							</button>
						</section>
					</section>
				</div>

				<div className='max-w-screen-sm mx-auto px-5'>
					<div className='grid place-items-center text-center gap-8'>
						<section>
							<p className='text-md text-gray-400'>Product range</p>
							<h2 className='text-4xl font-bold'>About us</h2>
						</section>
						<p className='text-lg leading-loose text-gray-500'>
							We manufacture a wide range of incense products including Agarbathis,
							Dhoops, Sambrani&apos;s. With a strong lineage of good quality products
							that is not just accepted but also revered by a wide variety of users,
							GT is one of the most trusted and well known incense brands in India.
						</p>
						<p className='text-lg leading-loose text-gray-500'>
							Some of our key products have managed to establish themselves as
							stand-alone brands too.
						</p>
						<button className='bg-gray-800 text-white px-10 py-3.5 rounded-xl font-semibold mt-5'>
							Lorem ipsum
						</button>
					</div>
				</div>

				<div className='grid gap-20'>
					<section className='text-center'>
						<h3 className='text-xl text-gray-400'>Product range</h3>
						<h2 className='text-4xl font-bold'>Our top sellers</h2>
					</section>

					<div className='landing_grid__3 px-10'>
						{Array.from(Array(8).keys()).map((i) => (
							<section key={i} className='p-5 flex flex-col justify-between'>
								<div className='bg-gray-200 h-[225px] w-full rounded-xl' />
								<div>
									<h3 className='text-gray-400'>Agarbatti</h3>
									<h2 className='text-xl font-bold'>Royal Lavendar</h2>
								</div>
								<button className='w-full py-2.5 bg-red-500 text-white font-semibold rounded-lg'>
									Lorem
								</button>
							</section>
						))}
					</div>
				</div>

				<div className='px-10'>
					<section className='bg-gray-100 rounded-xl grid justify-center gap-5 py-20'>
						<h2 className='text-4xl font-bold'>Why us?</h2>
						<p className='text-xl max-w-2xl leading-relaxed text-gray-400'>
							Our promise is to deliver premium quality products with freshness, rich
							aroma, long shelf life and purity.
						</p>
						<button className='justify-self-start bg-gray-800 text-white px-7 py-3.5 rounded-xl font-semibold mt-5'>
							Lorem ipsum
						</button>
					</section>
				</div>

				<div className='px-10 flex gap-10 overflow-x-scroll hide-scrollbar'>
					{Array.from(Array(10).keys()).map((i) => (
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
							<p className='text-lg text-gray-400 leading-relaxed'>
								&quot;Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
								erat nummy nibh euismod tincidunt ut&quot;
							</p>
						</section>
					))}
				</div>

				<div className='landing_grid__4'>
					{[
						{
							label: 'Man power',
							value: '300+',
						},
						{
							label: 'Total Utilisation',
							value: '80%',
						},
						{
							label: 'Success rate',
							value: '100%',
						},
						{
							label: "Sku's",
							value: '75+',
						},
					].map((item, i) => (
						<section key={i} className=' grid place-items-center'>
							<div className='grid gap-5'>
								<h1 className='text-6xl font-extrabold'>{item.value}</h1>
								<p className='text-xl text-gray-400'>{item.label}</p>
							</div>
						</section>
					))}
				</div>

				<div>
					<div className='bg-red-500 py-20'>
						<div className='max-w-screen-lg mx-auto grid place-items-center'>
							<div className='grid place-items-center gap-12'>
								<h1 className='text-4xl font-bold text-white'>
									We have customers worldwide
								</h1>
								<div className='flex gap-5'>
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
												i === 3 ? 'bg-white bg-opacity-20' : ''
											}`}
										>
											{item}
										</button>
									))}
								</div>
								<p className='max-w-xl text-center text-lg text-red-50 leading-loose'>
									The manufacturing division was started as a vision of our father
									Late shri. Kanti Doshi, to provide steady income to economically
									backward class society. Today we have 3 fully owned
									manufacturing plants, and multiple jobwork model units under our
									portfolio.
								</p>
								<button className='bg-white px-8 py-3.5 font-semibold rounded-lg text-red-500 shadow-xl shadow-red-700 hover:shadow-none'>
									Lorem ipsum
								</button>
							</div>
						</div>
					</div>

					<div className='bg-[#151515] py-20'>
						<div className='max-w-screen-xl mx-auto grid gap-10'>
							<section className='grid gap-3.5 text-white'>
								<h1 className='text-4xl font-bold'>Contact form</h1>
								<p className='text-lg text-gray-500'>Get in touch with us</p>
							</section>

							<form>
								<div className='grid grid-cols-3 gap-5'>
									<input
										placeholder='First name'
										className='px-5 py-3.5 bg-[#151515] border border-gray-500 rounded-lg'
									/>
									<input
										placeholder='Last name'
										className='px-5 py-3.5 bg-[#151515] border border-gray-500 rounded-lg'
									/>
									<input
										placeholder='Email ID'
										className='px-5 py-3.5 bg-[#151515] border border-gray-500 rounded-lg'
									/>
									<textarea
										placeholder='Enter your message here'
										className='resize-none col-span-3 px-5 py-3.5 bg-[#151515] border border-gray-500 rounded-lg'
										rows={5}
									/>
								</div>

								<button className='bg-gray-500 text-white px-7 py-3.5 w-[200px] text-left rounded-lg mt-10'>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export default Homepage

import { faClose, faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../components/layout/Layout'
import HomeProduct from '../components/products/HomeProduct'

const Products = () => {
	const [showFilter, setShowFilter] = React.useState(false)

	return (
		<Layout>
			<div className='p_base pt-36 md:pt-48 pb-32'>
				<h1 className='text-3xl md:text-4xl font-extrabold text-center'>Our Products</h1>

				<div className='lg:hidden flex justify-end'>
					<button
						className='text-lg mt-8 border flex items-center gap-x-2.5 px-5 py-2.5 rounded border-black'
						onClick={() => setShowFilter(!showFilter)}
					>
						<span>Filter</span>
						<FontAwesomeIcon icon={faFilter} />
					</button>
				</div>

				<div className='products__base mt-10 md:mt-20'>
					<div
						className={`absolute left-0 -top-20 py-10 px-5 z-[100] lg:py-0 bg-white shadow-xl w-full ${
							showFilter ? 'grid' : 'hidden'
						} lg:hidden col-start-1 col-end-1 mt-20 items-start`}
					>
						<div className='grid gap-y-16 relative'>
							<button
								className='absolute -top-5 -right-2.5 px-5 py-2.5'
								onClick={() => setShowFilter(false)}
							>
								<FontAwesomeIcon icon={faClose} />
							</button>
							<section className='mt-14'>
								<h2 className='text-xl font-extrabold'>Agarbatti</h2>
								<div className='grid gap-y-5 mt-6 text-gray-400'>
									{Array.from(Array(8).keys()).map((i) => (
										<section key={i} className='flex gap-x-2.5 items-center'>
											<input
												id={`agarbatti-${i + 1}`}
												type={'checkbox'}
												className='outline-none'
											/>
											<label
												htmlFor={`agarbatti-${i + 1}`}
												className='mt-[-3px]'
											>
												Variation name #{i + 1}
											</label>
										</section>
									))}
								</div>
							</section>
							<section>
								<h2 className='text-xl font-extrabold'>Sambrani Cups</h2>
								<div className='grid gap-y-5 mt-6 text-gray-400'>
									{Array.from(Array(4).keys()).map((i) => (
										<section key={i} className='flex gap-x-2.5 items-center'>
											<input
												id={`sambrani-${i + 1}`}
												type={'checkbox'}
												className='outline-none'
											/>
											<label
												htmlFor={`sambrani-${i + 1}`}
												className='mt-[-3px]'
											>
												Variation name #{i + 1}
											</label>
										</section>
									))}
								</div>
							</section>
							<section>
								<h2 className='text-xl font-extrabold'>Dhoops</h2>
								<div className='grid gap-y-5 mt-6 text-gray-400'>
									{Array.from(Array(4).keys()).map((i) => (
										<section key={i} className='flex gap-x-2.5 items-center'>
											<input
												id={`dhoop-${i + 1}`}
												type={'checkbox'}
												className='outline-none'
											/>
											<label htmlFor={`dhoop-${i + 1}`} className='mt-[-3px]'>
												Variation name #{i + 1}
											</label>
										</section>
									))}
								</div>
							</section>
							<section>
								<h2 className='text-xl font-extrabold'>Camphor</h2>
								<div className='grid gap-y-5 mt-6 text-gray-400'>
									{Array.from(Array(4).keys()).map((i) => (
										<section key={i} className='flex gap-x-2.5 items-center'>
											<input
												id={`camphor-${i + 1}`}
												type={'checkbox'}
												className='outline-none'
											/>
											<label
												htmlFor={`camphor-${i + 1}`}
												className='mt-[-3px]'
											>
												Variation name #{i + 1}
											</label>
										</section>
									))}
								</div>
							</section>
						</div>
					</div>

					<div className='hidden lg:grid col-start-1 col-end-1 mt-20 items-start'>
						<div className='grid gap-y-16'>
							<section>
								<h2 className='text-xl font-extrabold'>Agarbatti</h2>
								<div className='grid gap-y-5 mt-6 text-gray-400'>
									{Array.from(Array(8).keys()).map((i) => (
										<section key={i} className='flex gap-x-2.5 items-center'>
											<input
												id={`agarbatti-${i + 1}`}
												type={'checkbox'}
												className='outline-none'
											/>
											<label
												htmlFor={`agarbatti-${i + 1}`}
												className='mt-[-3px]'
											>
												Variation name #{i + 1}
											</label>
										</section>
									))}
								</div>
							</section>
							<section>
								<h2 className='text-xl font-extrabold'>Sambrani Cups</h2>
								<div className='grid gap-y-5 mt-6 text-gray-400'>
									{Array.from(Array(4).keys()).map((i) => (
										<section key={i} className='flex gap-x-2.5 items-center'>
											<input
												id={`sambrani-${i + 1}`}
												type={'checkbox'}
												className='outline-none'
											/>
											<label
												htmlFor={`sambrani-${i + 1}`}
												className='mt-[-3px]'
											>
												Variation name #{i + 1}
											</label>
										</section>
									))}
								</div>
							</section>
							<section>
								<h2 className='text-xl font-extrabold'>Dhoops</h2>
								<div className='grid gap-y-5 mt-6 text-gray-400'>
									{Array.from(Array(4).keys()).map((i) => (
										<section key={i} className='flex gap-x-2.5 items-center'>
											<input
												id={`dhoop-${i + 1}`}
												type={'checkbox'}
												className='outline-none'
											/>
											<label htmlFor={`dhoop-${i + 1}`} className='mt-[-3px]'>
												Variation name #{i + 1}
											</label>
										</section>
									))}
								</div>
							</section>
							<section>
								<h2 className='text-xl font-extrabold'>Camphor</h2>
								<div className='grid gap-y-5 mt-6 text-gray-400'>
									{Array.from(Array(4).keys()).map((i) => (
										<section key={i} className='flex gap-x-2.5 items-center'>
											<input
												id={`camphor-${i + 1}`}
												type={'checkbox'}
												className='outline-none'
											/>
											<label
												htmlFor={`camphor-${i + 1}`}
												className='mt-[-3px]'
											>
												Variation name #{i + 1}
											</label>
										</section>
									))}
								</div>
							</section>
						</div>
					</div>

					<div>
						<section className='flex items-center justify-between'>
							<h2 className='text-2xl md:text-3xl font-extrabold'>
								Featured products
							</h2>
							<button className='px-5 lg:pr-16 py-2.5 bg-gray-700 text-white rounded-lg'>
								view all
							</button>
						</section>
						<div className='products__grid mt-10'>
							{Array.from(Array(12).keys()).map((i) => (
								<HomeProduct key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Products

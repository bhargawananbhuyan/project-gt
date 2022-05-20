import { gsap } from 'gsap'
import React from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'
import Modal from '../layout/Modal'

const HomeProduct = () => {
	const [isHovered, setIsHovered] = React.useState(false)
	const handleMouseOver = () => setIsHovered(true)
	const handleMouseOut = () => setIsHovered(false)

	const [showModal, setShowModal] = React.useState(false)

	const btnRef = React.useRef()
	// const imgRef = React.useRef()
	React.useEffect(() => {
		if (
			btnRef.current
			// && imgRef.current
		) {
			if (isHovered) {
				gsap.fromTo(
					btnRef.current,
					{
						y: -10,
						opacity: 0,
						duration: 0.35,
					},
					{
						y: 0,
						opacity: 1,
						duration: 0.35,
					}
				)
				// gsap.fromTo(
				// 	imgRef.current,
				// 	{
				// 		opacity: 0,
				// 		duration: 0.5,
				// 	},
				// 	{
				// 		opacity: 1,
				// 		duration: 0.5,
				// 	}
				// )
			}
		}
	}, [isHovered])

	return (
		<>
			<ScrollTrigger start='-200px center' end='bottom center'>
				<Tween
					from={{ opacity: '0', y: '2.5rem' }}
					to={{ opacity: '1', y: '0rem' }}
					duration={1}
				>
					<div>
						<section
							className='p-5 grid gap-y-5 cursor-pointer'
							onMouseOver={handleMouseOver}
							onMouseOut={handleMouseOut}
							style={{ transition: '2s ease' }}
						>
							<div className='w-full rounded-xl bg-gray-100 h-[225px]'>
								{/* <img
						ref={imgRef}
						src={`/agri-${isHovered ? '15' : '13'}.png`}
						width={225}
						height={225}
					/> */}
							</div>
							<div>
								<h3 className='text-gray-400'>Agarbatti</h3>
								<h2 className='text-xl font-bold'>Royal Lavendar</h2>
							</div>
							{isHovered && (
								<button
									ref={btnRef}
									onClick={() => setShowModal(true)}
									className={`w-full py-2.5 bg-red-500 text-white font-semibold rounded-lg`}
								>
									Buy now
								</button>
							)}
						</section>
					</div>
				</Tween>
			</ScrollTrigger>
			<Modal open={showModal} setOpen={setShowModal} />
		</>
	)
}

export default HomeProduct

import { useRef, useEffect, useState } from 'react'
import CountUp from 'react-countup'

const io = ({ setDisplay }) =>
	new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0) {
				setDisplay(true)
				console.log(entry)
			}
		})
	})

const CountUpNum = ({ end, suffix, large }) => {
	const ref = useRef()
	const [display, setDisplay] = useState(false)

	useEffect(() => {
		if (ref.current) {
			io({ setDisplay }).observe(ref.current)
		}
	}, [ref, setDisplay, io])

	return (
		<div ref={ref}>
			{display && (
				<CountUp start={0} end={end} suffix={suffix}>
					{({ countUpRef }) => (
						<h1
							ref={countUpRef}
							className={`${large ? 'text-6xl' : 'text-5xl'} font-extrabold`}
						/>
					)}
				</CountUp>
			)}
		</div>
	)
}

const NumberGrid = ({ data, large = false }) => {
	return (
		<section className='number__grid'>
			{data.map((d, i) => (
				<section key={i} className={`grid ${large ? 'gap-y-5' : 'gap-y-2.5'}`}>
					<CountUpNum end={d.value} suffix={d.icon} large={large} />
					<p className={`${large ? 'text-xl' : 'text-lg'} text-gray-400 text-opacity-75`}>
						{d.label}
					</p>
				</section>
			))}
		</section>
	)
}
export default NumberGrid

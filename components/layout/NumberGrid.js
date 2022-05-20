import { useState } from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

const CountUpNum = ({ end, suffix, large }) => {
	const [focus, setFocus] = useState(false)

	return (
		<div>
			<CountUp start={focus ? null : 0} end={end} suffix={suffix}>
				{({ countUpRef }) => (
					<ReactVisibilitySensor
						active={!focus}
						onChange={(isVisible) => {
							if (isVisible) setFocus(true)
						}}
						delayedCall
					>
						<h1
							ref={countUpRef}
							className={`${large ? 'text-6xl' : 'text-5xl'} font-extrabold`}
						/>
					</ReactVisibilitySensor>
				)}
			</CountUp>
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

const NumberGrid = ({ data, large = false }) => (
	<section className='number__grid'>
		{data.map((d, i) => (
			<section key={i} className={`grid ${large ? 'gap-y-5' : 'gap-y-2.5'}`}>
				<h1 className={`${large ? 'text-6xl' : 'text-5xl'} font-extrabold`}>
					{d.value}
					{d.icon}
				</h1>
				<p className={`${large ? 'text-xl' : 'text-lg'} text-gray-400 text-opacity-75`}>
					{d.label}
				</p>
			</section>
		))}
	</section>
)
export default NumberGrid

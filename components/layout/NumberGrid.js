const NumberGrid = ({ data, large = false }) => (
	<section className='number__grid'>
		{data.map((d, i) => (
			<section key={i} className={`grid gap-y-${large ? '5' : '2.5'}`}>
				<h1 className={`text-${large ? '6' : '5'}xl font-extrabold`}>
					{d.value}
					{d.icon}
				</h1>
				<p className={`text-${large ? 'xl' : 'lg'} text-gray-400 text-opacity-75`}>
					{d.label}
				</p>
			</section>
		))}
	</section>
)
export default NumberGrid

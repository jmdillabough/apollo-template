export default function Hero() {
	return (
		<section className='bg-white dark:bg-gray-900 mt-10'>
			<div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
				<h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
					The<span className='text-rose-600'> no-bullshit</span> ratings films
					deserve.
				</h1>
				<p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
					Here at Reel Ratings we focus on the real (see what I did there?)
					rating of a movie is. No more stuffy critics and their polysyllabic
					cinema-speak. You&apos;re in control here.
				</p>
				<div className='px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36'>
					<span className='font-semibold text-gray-400 uppercase'>
						FEATURED Genres
					</span>
					<div className='flex gap-2 justify-around mt-6'>
						<div>
							<p className='font-semibold text-2xl'>Horror</p>
						</div>
						<div>
							<p>Thrillers</p>
						</div>
						<div>
							<p>Independant</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

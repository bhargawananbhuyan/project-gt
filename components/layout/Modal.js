import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Modal({ open, setOpen }) {
	const closeModal = () => setOpen(false)

	return (
		<>
			<Transition appear show={open} as={Fragment}>
				<Dialog as='div' className='relative z-[100]' onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-50' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-scroll'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-screen-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all grid gap-y-6'>
									<div className='grid place-items-end'>
										<button className='px-2.5 py-1.5' onClick={closeModal}>
											<FontAwesomeIcon icon={faTimes} />
										</button>
									</div>

									<section className='bg-gray-200 w-full h-[250px] md:h-[400px] rounded-xl' />
									<section className='flex gap-3.5 md:gap-5 flex-wrap'>
										{Array.from(Array(5).keys()).map((i) => (
											<section
												key={i}
												className='w-[42px] h-[42px] md:h-[75px] md:w-[75px] bg-gray-200 rounded-lg'
											/>
										))}
									</section>
									<section>
										<h1 className='text-3xl font-extrabold'>Royal Lavendar</h1>
										<p className='text-lg mt-3.5'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Duis nec nisl vel urna dictum tempus eu non mauris.
											Integer ut lectus a ante congue vehicula. Aliquam
											eleifend elit sem, vitae condimentum nisl tincidunt vel.
											Nullam libero lacus, facilisis sed cursus at, finibus
											sit amet arcu. Donec malesuada libero non dolor
											venenatis, vel suscipit sapien tristique. Suspendisse
											potenti. Etiam ultrices lacus vel libero convallis, et
											euismod nibh volutpat.
										</p>
									</section>
									<div className='flex gap-x-2.5'>
										<button className='px-8 py-3.5 bg-black text-white rounded font-semibold'>
											Shop Now
										</button>
										<button className='border border-black px-8 py-3.5 rounded font-semibold'>
											Enquire
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

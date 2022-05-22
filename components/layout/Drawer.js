import {
	faFacebookF,
	faInstagram,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

const Drawer = () => {
	const [open, setOpen] = React.useState(false)

	const toggleMenu = () => setOpen(!open)

	return (
		<Menu as={React.Fragment}>
			<Menu.Button
				className={`absolute -top-5 right-0 px-3.5 py-1.5 z-[202] ${open ? 'text-white' : 'text-black'
					} hover:bg-white hover:bg-opacity-5`}
				onClick={toggleMenu}
			>
				<FontAwesomeIcon icon={open ? faTimes : faBars} />
			</Menu.Button>
			<Transition show={open}>
				<Menu.Items
					static
					className='fixed top-0 right-0 bg-black bg-opacity-95 text-white flex flex-col h-screen w-[350px] sm:w-1/2 z-[201] p-10 pt-32 sm:pt-10 sm:p-24 xl:px-48 gap-8 sm:gap-10 items-end justify-end'
				>
					<div className='grid gap-5 absolute top-5 left-5 sm:top-10 sm:left-10'>
						{[faFacebookF, faTwitter, faInstagram, faLinkedinIn].map((item, i) => (
							<button
								key={i}
								className='bg-white bg-opacity-10 px-3.5 py-1.5 md:py-3.5 md:px-5 rounded-lg text-lg lg:text-xl'
							>
								<FontAwesomeIcon icon={item} />
							</button>
						))}
					</div>
					{[
						{
							title: 'Home',
							link: '/',
						},
						{
							title: 'About',
							link: '/about',
						},
						{
							title: 'Top Selling Products',
							link: '/#home-products',
						},
						{
							title: 'Shop now',
							link: '/products',
						},
						{
							title: 'Why us?',
							link: '/#why-us',
						},
						{
							title: 'Contact us',
							link: '/#contact',
						},
					].map((item, i) => (
						<Menu.Item key={i}>
							<Link href={item.link}>
								<a
									className='text-xl lg:text-2xl opacity-60 text-right'
									onClick={() => setOpen(false)}
								>
									{item.title}
								</a>
							</Link>
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default Drawer

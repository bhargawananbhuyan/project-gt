import {
	faFacebookF,
	faInstagram,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

const Drawer = () => {
	return (
		<Menu as='div'>
			<Menu.Button className='px-2.5 py-1.5'>
				<FontAwesomeIcon icon={faBars} />
			</Menu.Button>
			<Menu.Items className='fixed top-0 right-0 bg-black bg-opacity-95 text-white flex flex-col h-screen w-[350px] sm:w-1/2 z-[100] p-10 sm:p-20 gap-8 sm:gap-10 items-end sm:justify-end'>
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
						link: '/',
					},
					{
						title: 'Top Selling Products',
						link: '/',
					},
					{
						title: 'Shop now',
						link: '/',
					},
					{
						title: 'Why us?',
						link: '/',
					},
					{
						title: 'Contact us',
						link: '/',
					},
				].map((item, i) => (
					<Menu.Item key={i}>
						<Link href={item.link}>
							<a className='text-xl lg:text-2xl opacity-60 text-right'>
								{item.title}
							</a>
						</Link>
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	)
}

export default Drawer

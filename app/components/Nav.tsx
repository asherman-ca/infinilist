import React from 'react'
import Link from 'next/link'

const Nav = () => {
	return (
		<nav className='border-b border-gray-200 shadow-sm p-4'>
			<div className='max-w-6xl m-auto flex justify-between items-center'>
				<div className='flex gap-8 items-center'>
					<div className='font-bold text-3xl text-red-500'>Generist</div>
					<div className='flex gap-8 font-bold'>
						<Link href='/'>TV & Movies</Link>
						<Link href='/'>Music</Link>
						<Link href='/'>Sports</Link>
						<Link href='/'>Politics</Link>
					</div>
				</div>
				<div className='font-bold'>Sign In</div>
			</div>
		</nav>
	)
}

export default Nav

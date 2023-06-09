import './globals.css'
import { Inter, Roboto, Lobster_Two } from 'next/font/google'

import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-robot',
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`flex min-h-screen flex-col ${roboto.className}`}>
				<Nav />
				{children}
			</body>
		</html>
	)
}

import { Inter } from 'next/font/google';
import { decodeCrosshairShareCode, Crosshair } from 'csgo-sharecode';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const shareCode = 'CSGO-WsnnD-eHaMw-QNDf9-oxuDh-ydOUD';
	const crosshair: Crosshair = decodeCrosshairShareCode(shareCode);

	return (
		<>
			<main className={inter.className}>
				<p>Minimal site showing the error with the import.</p>
				<p>crosshair size: {crosshair.length}</p>
			</main>
		</>
	);
}

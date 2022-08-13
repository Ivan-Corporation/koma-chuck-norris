import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { RepositoryMetrics } from 'repository-metrics';

export default function Home() {

	let [responseData, setResponseData] = useState('');

	const fetchData = useCallback(() => {
		axios({
			method: 'GET',
			url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
			headers: {
				accept: 'application/json',
				'X-RapidAPI-Key': 'c232c6ccd4msh0bcf1216baa6af8p1baf68jsnf2c8ea66b4db',
				'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
			}
		})
			.then((response) => {
				setResponseData(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	useEffect(() => {
		fetchData()
	}, [fetchData])





	return (
		<div className={styles.container}>
			<Head>
				<title>Koma - Chuck Norris</title>
				<meta name="description" content="Chuck Norris quotes generator" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					<u>Koma</u> <br />Chuck Norris
				</h1>
				<Image className={styles.chuck} src="/Chuck Norris.png" alt='i will broke you' width={326}
					height={458} />

				<button className={styles.button} type='button' onClick={fetchData}>Next 👊</button>

				<h2>{responseData &&
					<blockquote>

						“{responseData.value}”
						<br />
						<small style={{ float: 'right' }}><h4>Chuck Norris</h4></small>
					</blockquote>
				}</h2>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/Ivan-Corporation"
					target="_blank"
					rel="noopener noreferrer"
				>

					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={72} />
					</span>

				</a>


			</footer>
			<div className={styles.metrics}>
				<RepositoryMetrics
					owner='Ivan-Corporation'
					repo='koma-chuck-norris'
					theme='dark'

				/>
			</div>
		</div>
	)
}

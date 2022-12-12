import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import dynamic from "next/dynamic";

const CatalogComponent = dynamic(() => import('child/clients'), { ssr: true });

export default function Home() {
    return (
        <div className={styles.container} suppressHydrationWarning>
            <Head>
                <title>Container App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav>This is the Nav Component from Container App</Nav>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to the Container app
                </h1>

                <CatalogComponent />
            </main>

            <Footer />
        </div>
    )
}


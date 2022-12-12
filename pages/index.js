import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";

const ClientsApp = dynamic(() => import('child/pages/index'), {ssr: true});

export default function Home() {
    return (
        <div className={styles.container}>
            <ClientsApp />
        </div>
    )
}

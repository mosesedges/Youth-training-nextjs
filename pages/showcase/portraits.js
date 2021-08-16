import Head from 'next/head'
import styles from '../../styles/Portraits.module.css'
import Link from 'next/link'


export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data);

    return{  
        props:{photos:data}
    }
}

const Portraits = ({photos}) => {              
    return ( 
        <>
        <Head>
            <title>Edgegrapy ||&nbsp;Portraits</title>
            <meta name='keyword' content='photography'/>
            </Head>
        <div className={styles.container} >
            <h1>Portraits</h1>
            <p>Find photos here</p>
            {photos.map(photo =>(
                <Link href={`/showcase/${photo.id}`} key={photo.id}>
                    <p className={styles.users}>{photo.username}</p>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Portraits;
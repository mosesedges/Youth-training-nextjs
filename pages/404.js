import {useEffect} from 'react'
import  Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const Not_Found = () => {

useEffect(()=>{

    setTimeout(()=>{
        Router.push('/')
    },3000)

},[])



    return ( 

        <>
        <Head>
            <title>
                Edgegrapy | Error page
            </title>
            <meta name='keyword' content='photography'/>
        </Head>
        <div>
            <h1>
                Oooops 
            </h1>
            <h3>
                This page does not exist sorry o...
            </h3>
            <Link href='/'><a>back to home</a></Link>

        </div>
        </>
     );
}
 
export default Not_Found;
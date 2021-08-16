import styles from'../../styles/id.module.css'
import Link from 'next/link'


export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(user => {
    
        return {
        params :{id:user.id.toString()}

        }
    })

    return {
        paths,
        fallback:false
    }

    
}



export const getStaticProps = async (context) => {
    const id = context.params.id;
const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const users = await res.json()


    return{
        props:{persons:users}
    }

}


const Details = ({persons}) => {
    return ( 
        <>
        <div className={styles.container} key={persons.id}>
            <h1>{persons.name}</h1>
            <h3>Username:&nbsp; {persons.username}</h3>
            <h3>visit: &nbsp;{persons.website}</h3>
            <h3>City: &nbsp; {persons.address.city}</h3>
            <h3>Phone: &nbsp; {persons.phone}</h3>
            <address>Address: &nbsp; {persons.email}</address>
            <br/>
            <button>BACK TO PORTRAITS</button>
        </div>
       
        </>
    );
}

export default Details;
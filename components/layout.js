import Navbar from './nav'
import Footer from './footer'
const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;
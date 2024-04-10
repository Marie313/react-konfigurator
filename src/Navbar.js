import { useState } from "react";
import Home from './Home';
import Shop from './Shop';

const Navbar = () => {

    const [headline, setHeadline] = useState();
    const clickHome = () => {
        setHeadline(<Home/>);
    }

    const clickShop = () => {
        setHeadline(<Shop/>);
    }
    return ( 
        <div className="nav">
            <button onClick={clickHome}>Home</button>
            <button onClick={clickShop}>Shop</button>
            { headline }
        </div>
    );
}
 
export default Navbar;
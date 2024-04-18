import { useState } from "react";
import CarList from "./CarList";
import AlleModelle from './AlleModelle';
import AMG from './AMG';
import Maybach from './Maybach';
import NeueModelle from "./NeueModelle";
import AmgLogo from './/logos/AmgLogo.jpg';
import MaybachLogo from './/logos/MaybachLogo.jpg';

const Navbar = () => {

    const [car, setCar] = useState();

    const [body, setBody] = useState(<CarList car={car} setCar={setCar} />);

    function AllClick(){
        setBody(<AlleModelle car={car} setCar={setCar} />)
    }

    function AmgClick(){
        setBody(<AMG car={car} setCar={setCar}/>)
    }

    function MaybachClick(){
        setBody(<Maybach car={car} setCar={setCar}/>)
    }

    function NewClick(){
        setBody(<NeueModelle car={car} setCar={setCar}/>)
    }

    return ( 
        <div className="nav">
            <button className="allButton" onClick={AllClick}>Alle Modelle</button>
            <button className="amgButton" onClick={AmgClick}><img src={AmgLogo} className="amgButtonImage"/></button>
            <button className="maybachButton" onClick={MaybachClick}><img src={MaybachLogo} className="maybachButtonImage" /></button>
            <button className="newButton" onClick={NewClick}>Neue Modelle</button>
            { body }
        </div>
    );
}
 
export default Navbar;
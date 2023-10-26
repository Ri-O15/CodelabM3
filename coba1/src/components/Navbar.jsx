import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
    return(
        <div>
            <nav>
                <ul type="none" >
                    <li>
                        <button><Link to= "/"> Beranda</Link></button>
                    </li>
                    <li>
                    <button><Link to= "/About"> About</Link></button>
                    </li>
                    <li>
                    <button><Link to= "/Contact"> Contact</Link></button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
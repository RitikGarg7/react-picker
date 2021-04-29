import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from './MiniPalette' 

import './PaletteList.css';
 
function PaletteList(props) {
    const {palettes}=props;
    const gotoPalette=(id)=>{
        props.history.push(`/palette/${id}`);
    }
    return (
        <div className="root-dash">
            <div className="container">
                <nav className="nav">
                    <h1>React Colors</h1>
                    <Link to="/palette/new">Create new Palette</Link>
                </nav>
                <div className="palettes">
                    {palettes.map(p=>( 
                        <MiniPalette {...p} handleClick={()=>gotoPalette(p.id)}/> 
                    ))}
                </div>
            </div>  
        </div>
    )
}


 
export default PaletteList

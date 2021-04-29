


import React from 'react'
import './MiniPalette.css';
function MiniPalette(props) {
    const {classes,paletteName,emoji,colors}=props;
    const miniBoxes=colors.map(color=>(
        <div className="mini-color" style={{backgroundColor:color.color}} key={color.name}></div>
    ))
    return ( 
        <div className="root" onClick={props.handleClick}>
            <div className="colors"> 
                {miniBoxes}
            </div>
            <h5 className="title">{paletteName} <span className="emoji">{emoji}</span></h5>
        </div>
    )
}

export default MiniPalette

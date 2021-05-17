


import React from 'react'
import './MiniPalette.css';
import DeleteIcon from '@material-ui/icons/Delete';
function MiniPalette(props) {
    const {classes,paletteName,emoji,colors}=props;
    const miniBoxes=colors.map(color=>(
        <div className="mini-color" style={{backgroundColor:color.color}} key={color.name}></div>
    ))
    const deletePalette=(e)=>{
        e.stopPropagation();
        alert('hi');
    }
    
    return ( 
        <div className="root" onClick={props.handleClick}> 
            <DeleteIcon 
                className="deleteIcon" 
                style={{'transition':'all 0.3s ease-in-out'}}
                onClick={deletePalette}
                />
        
            <div className="colors"> 
                {miniBoxes}
            </div>
            <h5 className="title">{paletteName} <span className="emoji">{emoji}</span></h5>
        </div>
    )
}

export default MiniPalette

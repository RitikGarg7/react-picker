import React,{useState} from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';


function Palette(props) {
    const [level,setlevel]=useState(500);
    const [format,setFormat]=useState("hex");
    const {colors,paletteName,emoji,id}=props.palette
    const handleSlide=(newLevel)=>{
        setlevel(newLevel)
    }
    const handleFormat=(val)=>{
         setFormat(val);
    }
    const colorBoxes=colors[level].map(color=>(
        <ColorBox 
            background={color[format]} 
            name={color.name} 
            key={color.id}
            id={color.id}
            paletteId={id}
            showLink={true}
            />
    ))
    return (

        <div className="Palette">
            <Navbar level={level} handleSlide={handleSlide} handleChange={handleFormat} showing={true}/>
            <div className="Palette-colors">
                {colorBoxes}
            </div>
           <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    )
}

export default Palette

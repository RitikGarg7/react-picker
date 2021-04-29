import React,{Component} from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this._shades=this.gather(this.props.palette,this.props.colorId);
        this.state={
            format:"hex"
        }
        this.changeFormat=this.changeFormat.bind(this);
    }
    


    gather(palette,colortofilter) {
        let shades=[];
        let allColors=palette.colors;
        for (let key in allColors) {
            shades=shades.concat(
                allColors[key].filter(color=>color.id===colortofilter)
            )
        }
        return shades.splice(1);
    }
    changeFormat(val) {
        this.setState({format:val})
    }
    render() {
        const {format}=this.state;
        const {paletteName,emoji,id}=this.props.palette;
        const colorboxes=this._shades.map(color=>(
            <ColorBox 
                key={color.name}
                name={color.name}
                background={color[format]}
                showLink={false}
            /> 
        ))
        return (
            <div className='Single Palette'>
                <Navbar handleChange={this.changeFormat} showing={false}/>
                 <div className='Palette-colors'>
                 {colorboxes}
                 <div className="go-back ColorBox">
                    <Link to={`/palette/${id}`} className='back-button'>Go Back!</Link>
                 </div>
                 </div>
                 <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
    
}

export default SingleColorPalette

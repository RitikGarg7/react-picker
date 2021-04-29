import React ,{useState}from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom'
import './ColorBox.css'
function ColorBox(props) {
    const {background,name,id,paletteId,showLink}=props;
    const [isCopied,setisCopied]=useState(false);
    const handleCopy=()=>{
        setisCopied(true);
        setTimeout(()=>{
            setisCopied(false);
        },1500);
    }
    return (
        <div className="ColorBox" style={{background:background}}>
            <div className={`copy-overlay ${isCopied && "show"}`} style={{background}}></div>
            <div className={`copy-msg ${isCopied && "show"}`}>
                <h1>Copied !</h1>
                <p>{background}</p>
            </div>

            <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <CopyToClipboard text={background} onCopy={handleCopy}>
                <button className="copy-button">Copy</button>
                </CopyToClipboard>
            </div>
            {showLink && 
                <Link to={`/palette/${paletteId}/${id}`} onClick={(e)=>e.stopPropagation()}>
                <span className="see-more">More</span>
                </Link>
            }
            
        </div>
    )
}

export default ColorBox

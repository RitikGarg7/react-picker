import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react';
import Palette from './Palette';
import { Route, Switch } from "react-router-dom";

import colorsData from './colorsData';
import {generatePalette} from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
function App() {
  const [palettes,setPalettes]=useState(colorsData);
  const findPalette=(id)=> {
    console.log(palettes);
    return palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  const deletePalette=(id)=> {
     
  }

  const savePalette=(newPalette)=>{
    console.log(newPalette);
    setPalettes([...palettes,newPalette])
    console.log(palettes);
  }

  return (
    // <div className="App">
    //   <Palette palette={generatePalette(colorsData[4])}/>
    // </div>
    <Switch>
      <Route exact path='/' render={(routeProps)=><PaletteList palettes={palettes} {...routeProps} />}></Route>
      <Route exact path="/palette/new" render={(routeProps)=><NewPaletteForm savePalette={savePalette}  {...routeProps} palettes={palettes}/>}></Route>
      <Route
          exact path='/palette/:id'
            render={routeProps => ( 
                      <Palette
                        palette={generatePalette(
                          findPalette(routeProps.match.params.id)
                        )}
                      /> 
                )}
                />
      
      <Route exact path='/palette/:paletteId/:colorId' 
          render={routeProps => ( 
                      <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          findPalette(routeProps.match.params.paletteId)
                        )}
                      /> 
                  )}></Route>

    </Switch>

  );
}

export default App;

import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'; 
import {ChromePicker} from 'react-color';
import Button from '@material-ui/core/Button';
import DragableColorList from './DragableColorList';
import {arrayMove} from 'react-sortable-hoc'; 
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'; 

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection:'row',
    justifyContent:'space-between',
    height:'64px',
    alignItems:'center'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display:'flex',
    alignItems:'center'
  },
  drawerHeader: { 
    display: 'flex',
    alignItems: 'center',
    width:'100%',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1, 
    height:`92vh`,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container:{
      display:'flex',
      flexDirection:'column',
      width:'90%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
  },
  picker:{
      width:'100% !important',
      marginTop:'2rem !important',

  },
  addColor:{
      width:'90%',
        padding:'1rem',
        marginTop:'1rem',
        fontSize:'2rem'
  },
  colorNameInput:{
      width:'90%',
      marginTop:'1rem'
  },
  buttons:{
      width:'100%',
      marginBottom:'1rem',
      display:'flex',
      justifyContent:'space-between'
  },
  button:{
      width:'48%'
  },
  navBtns:{
    marginRight:'1 rem',

  },
  btn:{
    margin:'0 0.5rem',
    textDecoration:'none'
  },
  link:{
    textDecoration:'none'
  },
  ritik:{
    display:'flex',
    flexDirection:'column'
  }
}));

function NewPaletteForm(props) {
    console.log(props);
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [colors,setColors]=useState(props.palettes[0].colors)
    const [currentcolor,setCurrent]=useState("teal");
    const [newColorName,setnewColorName]=useState("");
    const [newPaletteName,setnewPaletteName]=useState("");
    const paletteFull=colors.length>=20;
    const [open2, setOpen2] = useState(false);
    const [formShowing,setformShowing]=useState(false);
    const [emoji,setEmoji]=useState('');
    const [openSnack,setOpenSnack]=useState(false);
    const  closeSnackbar=() =>{
      setOpenSnack(false);
  }

    const handleClickOpen = () => {
      setOpen2(true);
      setformShowing(true);
    };
  
    const handleClose = () => {
      setOpen2(false);
      setformShowing(true);

    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const updateCurrentColor=(newcolor)=>{
        setCurrent(newcolor.hex);
    }
    const addnewColors=()=>{
        const newcolor={
            name:newColorName,
            color:currentcolor  
        }
        setColors([...colors,newcolor]);
        setnewColorName("");
    }

    const handleChange1=(evt)=>{
        setnewColorName(evt.target.value);
    }
    const handleChange2=(evt)=>{
        //console.log(evt);
        setnewPaletteName(evt.target.value);
    }
    const savePalette=()=>{
        let newName=newPaletteName;
        const newPalette={
            emoji:emoji,
            paletteName:newName,
            id:newName.toLowerCase().replace(/ /g,"-"),
            colors:colors
        };
        props.savePalette(newPalette); 
        props.history.push("/");
    }

    const handleNewName=()=>{
        setnewPaletteName(newPaletteName);
    }
    const removeColor=(colorName)=>{
        const remaining=colors.filter(color=>color.name!==colorName);
         setColors(remaining)
    } 
    const onSortEnd = ({ oldIndex, newIndex }) => setColors(arrayMove(colors, oldIndex, newIndex));
    const clearPalette=()=>{
        setColors([]);
    }

    const addRandom=()=>{
        const allColors = props.palettes.map(p => p.colors).flat();
        
        let rand = Math.floor(Math.random() * allColors.length);
        let randomColor = allColors[rand];
        
        setColors([...colors, randomColor] );
    } 

    const selectEmoji=(mystery)=>{
      // setOpenSnack(true);
      setEmoji(mystery.native);
    }
    return (
        <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create a Palette 
          </Typography>
          
        </Toolbar>
        <div className={classes.navBtns}> 
           { formShowing && <div>
             
              <Dialog open={open2} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <form onSubmit={savePalette}> 
                <DialogContent className={classes.ritik}>
                  <DialogContentText>
                    Enter a name to save your Palette !
                  </DialogContentText>
                  <Picker onSelect={selectEmoji} title="Pick a Palette Emoji"/>
  {/* * * * * * * * * * <input value={newPaletteName} onChange={handleChange2} name='newPaletteName'></input> */}
                  <TextField 
                    id="ritik" 
                    label="newPaletteName" 
                    variant="filled"  
                    style={{marginTop:'1rem'}}
                    value={newPaletteName} 
                    onChange={handleChange2} name='newPaletteName'/>
                  
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button 
                        variant='contained'  
                        color='primary' type='submit'>Save Palette</Button>
                </DialogActions>
                </form>
              </Dialog>
            </div>
           }
           
           

            <Link to="/"  className={classes.link}>
                <Button variant='contained'  
                color='secondary' className={classes.btn} >Go Back</Button>
            </Link>
            <Button variant="contained" color="primary" onClick={handleClickOpen} className={classes.btn}>
                Save
              </Button>

        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
             <ChevronLeftIcon /> 
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
        <Typography variant='h4' gutterBottom>Design your Palette</Typography>

        <div className={classes.buttons}>
            <Button className={classes.button} variant='contained' color='secondary' onClick={clearPalette}>Clear Palette</Button>
            <Button className={classes.button} variant='contained' color='primary' onClick={addRandom}>Random Color</Button>

        </div>
        <ChromePicker  style={{'width':'100% !important'}}
            classname={classes.picker}
            color={currentcolor} 
            onChangeComplete={(newcolor)=>updateCurrentColor(newcolor)} 
            /> 
        <TextField 
            id="filled-basic" 
            label="newColorName" 
            variant="filled" 
            className={classes.colorNameInput} 
            value={newColorName} 
            onChange={handleChange1} name='newColorName'/>
        <Button 
            variant='contained' 
            //  type='submit' 
            className={classes.addColor}
            onClick={addnewColors}
            color='primary' 
            style={{background:paletteFull?"grey":currentcolor}} 
            disabled={paletteFull}>
            {paletteFull?"Palette Full":"Add Color"}
            </Button>
            </div>
        {/* </form> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} /> 
         <DragableColorList 
            colors={colors} 
            removeColor={removeColor}
            axis='xy'
            onSortEnd={onSortEnd}
            />


      </main>
       
    </div>
    )
}

export default NewPaletteForm

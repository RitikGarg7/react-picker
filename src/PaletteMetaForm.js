// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// function PaletteMetaForm(props) {
//     const [open, setOpen] = React.useState(false);
//     const [newPaletteName,setnewPaletteName]=React.useState("");
//     // const {newPaletteName}=props;
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleChange2=(evt)=>{
//     //console.log(evt);
//     setnewPaletteName(evt.target.value);
// }
// const savePalette=()=>{
//     let newName=newPaletteName;
//     const newPalette={

//         paletteName:newName,
//         id:newName.toLowerCase().replace(/ /g,"-"), 
//     };
//     props.savePalette(newPalette); 
//     props.history.push("/");
// }

//     return (
//         <div>
//           <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//             Open form dialog
//           </Button>
//           <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//             <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//             <DialogContent>
//               <DialogContentText>
//                 To subscribe to this website, please enter your email address here. We will send updates
//                 occasionally.
//               </DialogContentText>
//                <form onSubmit={savePalette}>
//                 <input value={newPaletteName} onChange={handleChange2} name='newPaletteName'></input>
//                 <Button 
//                     variant='contained'  
//                     color='primary' type='submit'>Save Palette</Button>
//                 </form>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose} color="primary">
//                 Cancel
//               </Button>
//               <Button onClick={handleClose} color="primary">
//                 Subscribe
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </div>
//       );
// }

// export default PaletteMetaForm

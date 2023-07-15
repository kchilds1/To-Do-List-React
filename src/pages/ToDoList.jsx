import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { taskInputStyles } from '../components/Inputs/TaskInputStyle';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardHeader, Stack } from '@mui/material';
import AlertDialogSlide from '../components/Dialog';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';


const ToDoList = () => {
  const [task, setTask] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [inputObjects, setInputObjects] = useState([]);
    const [showAlertDialog, setShowAlertDialog] = useState(false);

    useEffect(()=> {
      const timer = setTimeout(() => {
      setShowAlertDialog(true);
  },);

    return() =>{
        clearTimeout(timer);
    };
    }, []);
    
useEffect (() => {
    if(submitted){
        const newInputObject = { task, details };
        setInputObjects([...inputObjects, newInputObject]);
        setTask('');
        setDetails('');
        setSubmitted(false);
    }
}, [submitted]);


    const handleClick = () => {
         setSubmitted(true);
    };

    const clearList = () => {
        setInputObjects([]);
    };
    
    const removeTask = (index) => {
        const updatedInputObjects = inputObjects.filter((_, i) => i !== index);
        setInputObjects(updatedInputObjects);
    };

     const detailsButton = (index) => {
      const input = inputObjects[index];
      console.log(input.details)
             console.log(`details button was clicked for ${index}`)
             
    };

  return (
    <Container>
      <Box component="form"
           sx={{
             '& .MuiTextField-root': { m: 1, width: '25ch' },
           }}
           noValidate
           autoComplete="off">
        <TextField value={task} onChange={(e) => setTask(e.target.value)} id="TaskName" label="Task" maxRows={4} variant="filled"helperText='Please provide task name'  required />
        <TextField value={details} onChange={(e) => setDetails(e.target.value)} id="Details" label="Task Details" placeholder="Enter details here" variant="filled"  helperText='Explain the details for task' required />
        <div>
          <Button sx={taskInputStyles.Button} onClick={handleClick}>SUBMIT</Button>
          <Button sx={taskInputStyles.Button} onClick={clearList}>CLEAR LIST</Button>
        </div>
      </Box>
      <Stack direction='row' spacing={2} sx={{marginTop:'4px'}}>
        {inputObjects.map((input, index) =>(<ToDoItem task={input.task} details={input.details} handleRemove={() => removeTask(index)}/>
      ))}
      </Stack>
      </Container>
   );
};

  export default ToDoList

  const ToDoItem = ({task, details, handleRemove}) => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
    <>
          <Card sx={{borderWidth:'3px', borderStyle: 'solid', marginTop:'4px',borderRadius:'10px', padding:'5px'}}>
            <CardHeader title={task}></CardHeader>
            <CardContent>{details}</CardContent>
            <CardActionArea>
              <Button sx={taskInputStyles.Button} onClick= {() => {handleRemove()}}>REMOVE</Button>
              <Button sx={taskInputStyles.Button} onClick= {() => {setIsOpen(true)}}>DETAILS</Button>
            </CardActionArea>
        </Card>
        <Dialog open={isOpen}>
        <DialogTitle>{task}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {details}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setIsOpen(false)}}>CLOSE</Button>
          
        </DialogActions>
        </Dialog>
        </>
    </>
  }
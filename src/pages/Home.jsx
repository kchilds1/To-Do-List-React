import Button from "@mui/material/Button";
import { taskInputStyles } from '../components/Inputs/TaskInputStyle';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";



const Home = () => {
  return (
    <div style={{width:'100%',margin:'0'}}>
    {/* <NavBar /> */}
    <Container>
      <div>This is the home page</div>
      <Link to='/Login' sx={taskInputStyles.Button} >Login</Link>
      <Link to='/ToDoList'sx={taskInputStyles.Button}>To Do List</Link>
    </Container>
    
    </div>
    ) 
};

export default Home;
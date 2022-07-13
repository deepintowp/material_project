import './App.css';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Cakesection from './Components/Cakesection';
import Contactus from './Components/Contactus';

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}  >
      
    <Navbar />
    <Container>
      <Herosection />
      <Cakesection />
      <Contactus/>
    </Container>
   
    </ThemeProvider>
  );
}

export default App;

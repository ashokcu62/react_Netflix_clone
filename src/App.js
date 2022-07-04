import NavBar from "./Components/NavBar/NavBar";
import{ActionMovies,ComedyMovies,HorrorMovies,Originals, RomanceMovies,Documentaries} from "./Components/Urls"

import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
        <NavBar/> 
        <Banner/>
        <RowPost  url={Originals} title="Netflix Originals"/>
        <RowPost  url={ActionMovies} title="Action" isSmall/>
        <RowPost  url={ComedyMovies} title="Comedy" isSmall/>
        <RowPost  url={HorrorMovies} title="Horror" isSmall/>
        <RowPost  url={RomanceMovies} title="Romance" isSmall/>
        <RowPost  url={Documentaries} title="Documentries" isSmall/>
        
        
    </div>
  );
}

export default App;

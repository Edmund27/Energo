import { Container } from "react-bootstrap";
import "./App.css";
import Map from "./components/Map";
import Navigation from "./components/Navigation";

function App() {
  document.body.style.overflow = "hidden";
  // const fetchData = async () => {
  //   const response = await fetch ()
  //   const data = await response.json()

  //   console.log(data)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div>
      <Navigation />
      <Container className="map-container">
        <Map />
        {/* <Mapper /> */}
      </Container>
    </div>
  );
}

export default App;

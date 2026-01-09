import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating startCount={10} /> */}
      {/* ImageSlider component */}
      <ImageSlider
        url="https://picsum.photos/v2/list"
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;

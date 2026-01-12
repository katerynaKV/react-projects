import "./App.css";
import Accordion from "./projects/accordion/Accordion";
import ImageSlider from "./projects/image-slider/ImageSlider";
import RandomColor from "./projects/random-color/RandomColor";
import StarRating from "./projects/star-rating/StarRating";

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

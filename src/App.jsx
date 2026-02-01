import './App.css';
import Accordion from './projects/accordion/Accordion';
import CustomModal from './projects/custom-modal/CustomModal';
import CustomTabs from './projects/custom-tabs/CustomTabs';
import GithubProfileFinder from './projects/github-profile-finder/GithubProfileFinder';
import ImageSlider from './projects/image-slider/ImageSlider';
import LightDarkMode from './projects/light-dark-mode/LightDarkMode';
import LoadMoreData from './projects/load-more-data/LoadMoreData';
import QRCodeGenerator from './projects/qr-code-generator/QRCodeGenerator';
import RandomColor from './projects/random-color/RandomColor';
import ScrollIndicator from './projects/scroll-indicator/ScrollIndicator';
import StarRating from './projects/star-rating/StarRating';
import TreeView from './projects/tree-view/TreeView';
import { menus } from './projects/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating startCount={10} /> */}
      {/* ImageSlider component */}
      {/* <ImageSlider
        url="https://picsum.photos/v2/list"
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light and dark theme swich */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url="https://dummyjson.com/products?limit=100" /> */}

      {/* Custom tabs component */}
      {/* <CustomTabs /> */}

      {/* Custom Modal component */}
      {/* <CustomModal /> */}

      {/* Github profile finder */}
      <GithubProfileFinder />
    </div>
  );
}

export default App;

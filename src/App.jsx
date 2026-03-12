import './App.css';
import Accordion from './projects/accordion/Accordion';
import CustomModal from './projects/custom-modal/CustomModal';
import CustomTabs from './projects/custom-tabs/CustomTabs';
import FeatureFlags from './projects/feature-flag/FeatureFlags';
import FeatureFlagsProvider from './projects/feature-flag/context/FeatureFlagsProvider';
import GithubProfileFinder from './projects/github-profile-finder/GithubProfileFinder';
import ImageSlider from './projects/image-slider/ImageSlider';
import LightDarkMode from './projects/light-dark-mode/LightDarkMode';
import LoadMoreData from './projects/load-more-data/LoadMoreData';
import QRCodeGenerator from './projects/qr-code-generator/QRCodeGenerator';
import RandomColor from './projects/random-color/RandomColor';
import ScrollIndicator from './projects/scroll-indicator/ScrollIndicator';
import SearchAutocomplete from './projects/search-autocomplete-with-API/SearchAutocomplete';
import StarRating from './projects/star-rating/StarRating';
import TicTacToe from './projects/tic-tac-toe/TicTacToe';
import TreeView from './projects/tree-view/TreeView';
import UseFetchHookTest from './projects/use-fetch/UseFetchHookTest';
import { menus } from './projects/tree-view/data';
import UseOnClickOutsideTest from './projects/use-outside-click/UseOnClickOutsideTest';
import UseWindowResizeTest from './projects/use-window-resize/UseWindowResizeTest';
import ScrollToTopAndBottom from './projects/scroll-to-top-and-bottom/ScrollToTopAndBottom';
import ScrollToSection from './projects/scroll-to-top-and-bottom/ScrollToSection';

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
      {/* <GithubProfileFinder /> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* Tic tac toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagsProvider>
        <FeatureFlags />
      </FeatureFlagsProvider> */}

      {/* UseFetch - Custom Hook Test */}
      {/* <UseFetchHookTest /> */}

      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnClickOutsideTest /> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll to a Particular Section */}
      <ScrollToSection />
    </div>
  );
}

export default App;

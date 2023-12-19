import "./App.css";
import { About } from "./component/About";
import { Activities } from "./component/Activities";
import { Committe } from "./component/Committee";
import EventPage from "./component/EventPage";
import { Flex } from "./component/Flex";
import GalleryComponent from "./component/Gallery";
import { Header } from "./component/Header";
import { Navbar } from "./component/Navbar";
import imageData from "./images.json";

//   // Form page component logic goes here
//   return <div>Form Page</div>;
// };

// const Home = () => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       <Navbar />
//       <Header />
//       <About />
//       <Flex />
//       <Committe />
//       <Activities />
//       <AccomodationMain />
//       {/* Add more instances of AccommodationCard as needed */}
//     </div>
//   );
// };

function App() {
  const { images } = imageData;

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Flex />
      <Committe />
      <Activities />
      <EventPage />
      <GalleryComponent images={images} />
    </>
  );
}

export default App;

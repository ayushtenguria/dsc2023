import { Fade } from "react-reveal";
import Gallery from "react-grid-gallery";
import ImagesData from "../images.json";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

export const Gallert = () => {
  const onlyWidth = useWindowWidth();
  let displayedImages = ImagesData.images; // Access the array under the "images" key

  if (onlyWidth < 1199) {
    displayedImages = displayedImages.slice(0, 4);
  }

  return (
    <div className="my-20">
      <div className="flex justify-center">
        <p className="headingText text-5xl font-bold">Gallery</p>
      </div>
      <div>
        <Fade up>
          <div>
            <Gallery images={displayedImages} />
          </div>
        </Fade>
      </div>
    </div>
  );
};

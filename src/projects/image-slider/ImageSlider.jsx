import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageSlider.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);

        const response = await fetch(`${url}?page=${page}&limit=${limit}`);

        if (!response.ok) {
          throw new Error(
            `There was an error with status code ${response.status}`
          );
        }

        const data = await response.json();

        setImages(data);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (url !== "") fetchImages();
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />

      {images.map((imageItem, index) => (
        <img
          key={imageItem.id}
          alt="imageItem.download_url"
          src={imageItem.download_url}
          className={
            currentSlide === index
              ? "current-image"
              : "current-image hide-current-image"
          }
        />
      ))}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      <span className="circle-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              currentSlide === index
                ? "current-indicator"
                : "current-indicator inactive-indicator"
            }
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </span>
    </div>
  );
}

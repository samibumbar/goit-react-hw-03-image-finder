import React, { useState, useEffect } from "react";

import Searchbar from "./components/search-bar/search-bar";
import ImageGallery from "./components/image-galery/image-gallery";
import Button from "./components/button/button";
import Loader from "./components/loader/loader";
import Modal from "./components/modal/modal";

import axios from "axios";

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=45702764-074dc4323a25c44256914ed69&image_type=photo&orientation=horizontal&per_page=12`
        );

        setImages((prevImages) => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error("Error fetching images", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (largeImageURL: string) => {
    setSelectedImage(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };

  return (
    <div className=".container">
      <Searchbar onSubmit={handleSearchSubmit} />{" "}
      <ImageGallery images={images} onImageClick={openModal} />{" "}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <Button onClick={loadMoreImages} />
      )}{" "}
      {showModal && (
        <Modal largeImageURL={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;

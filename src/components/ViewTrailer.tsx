import Modal from "react-modal";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const ViewTrailer = ({ movieId, welcomeId }: any) => {
  console.log(welcomeId);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState<any>();
  let subtitle: any;

  const getVideo = async () => {
    try {
      if (movieId || welcomeId) {
        await fetch(
          `https://api.themoviedb.org/3/movie/${
            movieId ?? welcomeId
          }/videos?api_key=aa4221617688ee03abe434f78ca05707&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data.results);
            setVideo(data.results);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);
  console.log(video);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        className="bg-gray-600 mt-6 w-full sm:w-80 sm:h-10 h-14 hover:bg-gray-700 rounded text-white font-bold py-2 px-4"
        onClick={openModal}
      >
        Watch Now
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {video && <YouTube videoId={video[0].key} />}
      </Modal>
    </div>
  );
};

export default ViewTrailer;

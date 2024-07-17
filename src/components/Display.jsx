import React, { useEffect, useState } from 'react';
import VideoCard  from './Videocard';
import { getAllVideoApi, updateCategoryApi } from '../services/allAPI';

function Display({ addVideoStatus, setDragOut }) {
  const [allVideo, setAllVideo] = useState([]);
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false);

  const getAllVideos = async () => {
    try {
      const result = await getAllVideoApi();
      setAllVideo(result.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e) => {
    const result = JSON.parse(e.dataTransfer.getData('dataShare'));
    /* const result = JSON.parse(e.dataTransfer.getData('dataShare')); */
    const selectedCategory = result.categoryDetails;

    const newDetails = selectedCategory.allVideos.filter((item) => item.id !== result.videoId);

    const reqBody = {
      categoryName: selectedCategory.categoryName,
      allVideos: newDetails,
      id: selectedCategory.id,
    };

    try {
      const response = await updateCategoryApi(selectedCategory.id, reqBody);
      if (response.status >= 200 && response.status < 300) {
        setDragOut(true);
        getAllVideos(); // Fetch updated videos list after dropping
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, [addVideoStatus, deleteVideoStatus]);

  return (
    <div className="row w-100" onDragOver={dragOver} onDrop={videoDrop}>
      <h5>All Videos</h5>
      {allVideo.length > 0 ? (
        allVideo.map((item) => (
          <div className="col-md-3 mt-4" key={item.id}>
            <VideoCard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
          </div>
        ))
      ) : (
        <p className="text-danger fs-5 mt-5">Nothing to Display</p>
      )}
    </div>
  );
}

export default Display;

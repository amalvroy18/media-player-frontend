import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getAllCategoryApi, removeCategoryApi, updateCategoryApi } from '../services/allAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Videocard from './Videocard';

function Group({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCategoryAdd = async () => {
    const reqBody = {
      categoryName,
      allVideos: []
    };
    const result = await addCategoryApi(reqBody);
    if (result.status >= 200 && result.status < 300) {
      setCategoryName("");
      handleClose();
      alert('Category added successfully');
      setAddStatus(true);
    }
  };

  const getCategory = async () => {
    const result = await getAllCategoryApi();
    setAllCategory(result.data);
  };

  const handleDelete = async (id) => {
    await removeCategoryApi(id);
    setAddStatus(true);
  };
  const ondrag=(e,videoId,categoryDetails)=>{
    console.log(videoId,categoryDetails);
   const dataShare={videoId,categoryDetails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }

  useEffect(() => {
    setAddStatus(false)
    setUpdateStatus(false)
    setDragOut(false)
    getCategory()
  }, [addStatus,updateStatus,dragOut]);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const VideoDrop = async (e, selectedCategory) => {
    /* e.preventDefault(); */
    const vDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));

    if (selectedCategory.allVideos.find(item => item.id == vDetails.id)) {
      toast.warning('This video already exists in the category');
    } else {
      selectedCategory.allVideos.push(vDetails);
      const result = await updateCategoryApi(selectedCategory.id, selectedCategory);
      if (result.status >= 200 && result.status <= 300) {
        toast.success('Video added successfully');
        setUpdateStatus(true);
      }
    }
  };

  useEffect(() => {
    setAddStatus(false)
    setUpdateStatus(false)
    setDragOut(false)
    getCategory();
  }, [addStatus,updateStatus,dragOut]);

  return (
    <>
      <div>
        <h5>Category</h5>
        <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>
        {allCategory.length > 0 ? allCategory.map((item) => (
          <div className='p-3 border rounded mt-4' key={item.id} onDragOver={dragOver} onDrop={(e) => VideoDrop(e, item)}>
            <div className='d-flex justify-content-between'>
              <p className='mb-4'>{item.categoryName}</p>
              <button className='btn btn-danger' onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            {item.allVideos.length>0?
            item?.allVideos.map((video)=>(
              <div draggable ondragStart={(e)=>ondrag(e, video.id,item)}>
            <Videocard video={video} isPresent={true} />
            </div>)) :null}
           
          </div>
        )) : 
        <p className='text-danger mt-5'>No categories available</p>}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'>
            <input type="text" className='form-control' placeholder='Category name' value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="warning" onClick={handleCategoryAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Group;

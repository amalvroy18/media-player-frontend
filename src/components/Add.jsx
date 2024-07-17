import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp ,faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allVideoApi,getAllCategoryApi } from '../services/allAPI';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddVideoStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails,setVideoDetails]=useState({
    caption:"",
    imageUrl:"",
    embbedLink:""
    
  })
  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLink = (e)=>{
    const link = e.target.value
    console.log(link);

    if(link.startsWith('https://youtu.be/')){
      setVideoDetails({...videoDetails,embbedLink:`https://www.youtube.com/embed/${link.slice(17,28)}`})
    }
    else{
      setVideoDetails({...videoDetails,embbedLink:`https://www.youtube.com/embed/${link.slice(17,28)}`})
    }
   
  }

  const handleUpload =async(e)=>{
    e.preventDefault()

    const result =await allVideoApi(videoDetails)
   console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('video added successfully')
      handleClose()
      setAddVideoStatus(result.data)
    }
    else{
      alert('something went wrong')
      console.log(result);
    }
    
  }
  return (
    <>
    <div className='d-flex'>
    <h2>Upload new Video  </h2>
    
    <button className='btn' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} /></button>
    </div>
    


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-3'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='fs-5'>Please fill the following details</p>
          <form className='border p-3 rounded'>
            <div className='mb-3'>
            <input type="text" className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} placeholder='Video Caption' />
            </div>
            <div className='mb-3'>
            <input type="text" className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} placeholder='Video Image' />
            </div>
            <div className='mb-3'>
            <input type="text" className='form-control' onChange={(e)=>getLink(e)} placeholder='Video Url' />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
  
    
      <ToastContainer />
    </>
  )
}

export default Add
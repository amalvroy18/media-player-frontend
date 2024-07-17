import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allAPI';


function Videocard({video,setDeleteVideoStatus, isPresent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true);
    const caption= video?.caption
    const url =video?.embbedLink
    const time = new Date ()
    const timeStamp =new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:"2-digit",day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(timeStamp);

    const reqBody ={
      caption,url,timeStamp
    }
    const result = await addVideoHistoryApi(reqBody)
    console.log(reqBody);

  } 

  const handleDelete = async(id) =>{
    console.log(typeof(id));
    const result= await  deleteVideoApi(id)
    setDeleteVideoStatus(result.data)
  
  }

  const videoDrag=(e,video)=>{
    /*console.log(typeof(id)); */
    console.log(video);
     /* console.log(`draged Video id is ${video}`); */
      e.dataTransfer.setData("videoDetails",JSON.stringify(video)) 
    
  }
  return (
    <>
     <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e, video)} className='mt-4' >
      {!isPresent && <Card.Img variant="top" onClick={handleShow} src={video?.imageUrl}  height={'300px'} />}
      <Card.Body>
        <div className='d-flex justify-content-center align-items-center mx-3'>
        <Card.Title className='me-4'>{video?.caption}</Card.Title>
        {!isPresent &&<Button variant="danger mt-4" onClick={()=>handleDelete(video?.id)}><FontAwesomeIcon icon={faTrashCan} className=''/></Button>
        
      }
        </div>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${video?.embbedLink}?autoplay=1`} title="Kovilam Ente Ullile | Karnika | Arun Venpala | Victor Joseph | Anna Baby" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default Videocard
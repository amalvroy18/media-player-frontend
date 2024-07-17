import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faTrashCan ,faHouse} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getVideoHistoryApi ,deleteVideoHistoryApi} from '../services/allAPI'

function Watchhistory() {
  const [allVideo,setAllVideo] =useState([])

  const getVideoHistory = async ()=>{
    const result = await getVideoHistoryApi()
    if(result.status>=200 && result.status<300){
      setAllVideo(result.data)
    }
  }
  console.log(allVideo);

  const handleDeleteVideo = async (id)=>{
    await deleteVideoHistoryApi(id)
    getVideoHistory()
  }

    useEffect(()=>{
      getVideoHistory()
    },[])


  return (
    <>
    <div className='row w-100 my-5'>
    <div className='d-flex justify-content-between p-md-5'><h5 className='text-center'>Watch History</h5>
    <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon icon={faHouse}/><span className='hide'>Back Home</span></Link></div>
      <div className='col-md-1'>
      </div>
        <div className='col-md-10'>
          
          {allVideo.length>0?<table className='table mt-5'>
            <thead>
              <tr>
                <th>sl.no</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              { allVideo?.map((item, index)=>(<tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><Link to={item.url} target='_blank'>{item.url}</Link></td>
              <td>{item.timeStamp}</td>
              <td><button className='btn btn-danger' onClick={()=>handleDeleteVideo(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button></td>
              </tr>))}
            </tbody>
          </table>
          :
          <p>nothing to display</p>}
        </div>
        <div className='col-md-1'></div>
      </div>
    
    </>
  )
}

export default Watchhistory
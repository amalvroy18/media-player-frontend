import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (



    <>
    <div>
  <Row>
  <Col md={1}></Col>
  <Col md={5}>
  <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ex nemo veritatis et fuga aspernatur accusamus? Incidunt eum amet fugit quidem, necessitatibus iste qui quos saepe dicta odit repellendus ducimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt perferendis optio excepturi repudiandae quidem placeat ad neque, repellat, amet labore mollitia esse architecto minima. Alias tempore voluptate consequuntur autem veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum libero ipsa velit voluptatum consequuntur eaque quas elig</p>
  <button className='btn btn-warning mt-5 ms-5'>Get Started</button>
  </Col>

  <Col md={1}>
  </Col>
  <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
  <img src="https://i.pinimg.com/originals/33/b9/b6/33b9b6212b27c0af77ddfd17ea3a2c9e.gif" alt="no image" className='w-75'/>
  </Col>
</Row>
</div>
<div className='container'>
  <h2 className='text-center'>Features</h2>
  <div className='row mt-5'>
    <Col className='md-1'></Col>
    <Col className='md-3 me-1'>
    <Card style={{ width: '18rem', height: '400px' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/64/53/24/645324641a0555cc55cea87787fc0bcb.gif"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col className='md-1'></Col>
    <Col className='md-3'>
    <Card style={{ width: '18rem', height: '400px' }}>
      <Card.Img variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/2315477275998214579/FD9A3DD25B12BA1B59A99B6C553A95314E71CCD7/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col className='md-1'></Col>
    <Col className='md-3 me-5'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.giphy.com/media/P1xvuSBd7XnXy/giphy.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

  </div>

</div>
<div className='container-fluid'>
  <div className='row'>
    <div className='col-md-1'></div>
    <div className='col-md-10 border-secondary-p-3 my-5 border-2 rounded'>
    <div className='row p-4'>
    <div className='col-md-4'>
      <h3 className='text-warning'>Simple fast and Powerful</h3>
      <p className='mt-5'><span className='fs-5'>Play Everything</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat obcaecati, incidunt veritatis autem cum tempora! Illo fugit odit minus animi vero a ipsa hic dolor adipisci esse optio, laborum architecto!</p>
    </div>
    <div className='col-md-6'>
    <iframe width="699" height="480" src="https://www.youtube.com/embed/a3Ue-LN5B9U?list=RDa3Ue-LN5B9U" title="Sai Abhyankkar - Aasa Kooda (Music Video) | Thejo Bharathwaj | Preity Mukundhan | Sai Smriti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <Link to='/home'><button className='btn btn-warning mt-5'>Get Started</button></Link>
    </div>
    </div>
    </div>
    <div className='col-md-1'></div>

  </div>
</div>


</>
  )
}


export default Landingpage
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import Spinner from 'react-bootstrap/Spinner'; 

const ContentBox = (props) => {
  return (
    <div className='contentBox'>
      <div className="section">
        <h2 className="sectionHead">You:</h2> 
        <h4>{props.ques}</h4>
      </div>
      <div className="section">
        <h2 className="sectionHead">Mistral AI:</h2> <h4>{props.flag ? <Spinner animation="border" variant="primary" /> : props.ans}</h4>
      </div>
    </div>
  )
}
export default ContentBox
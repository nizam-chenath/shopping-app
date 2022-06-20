import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cu
              m est nobis corrupti quibusdam asperiores. Delectus sim
              ilique magnam cupiditate porro molestiae voluptates, reic
              iendis suscipit deleniti hic et, incidunt tempora exercitationem il
              lum quam temporibus expedita assumenda officia sed, nobis e
              a iste. Nobis suscipit assumenda cum alias mollitia et ear
              um vel deleniti molestias!

            </p>
            <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
          </div>
          <div className="col-md-6">
            <img src="/assets/images/about.webp" alt="" height="400px" width="400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
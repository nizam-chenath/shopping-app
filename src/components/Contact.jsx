import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Any Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md s d-flex justify-content-center">
            <img src="/assets/images/contact.png" alt="" height="230px" width="340px" />
          </div>
          <div className="col-md 6" >
            <form action="">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleForm" placeholder="John Cena" />
              </div>
               <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Sened Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
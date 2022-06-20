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
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="John Cena" />
              </div>
               <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
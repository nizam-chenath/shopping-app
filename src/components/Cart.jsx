import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux"
import {delItem} from "../redux/actions/action"
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) =>{
        dispatch(delItem(item))
    }
     console.log("item",state)

    const cartItems = (cartItem) => {
        console.log("cartitem",cartItem)
        return(
          
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt="" height="180px" width="120px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptycart = () =>{
        return(

            <div className="px-4 my-5 bg-light rounded-3 py-4">
                <div className="container py-4 ">
                    <div className="row">
                        <h4 className="mx-auto ">Cart have no items</h4>
                    </div>
                    </div>
            </div>        
        )
    }

    const button = () =>{
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-4  w-25 mx-auto">proceed to checkout</NavLink>
                </div>
            </div>
        )
    }
  return (
    <>
    {state.length === 0 && emptycart()}
    {state.length !== 0 && state.map(cartItems)}
    {state.length !== 0 && button()}
    </>
  )
}

export default Cart
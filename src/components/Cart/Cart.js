import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { clearCart, getCartItems } from '../../slices/cartSlice'
import { openModal } from '../../slices/modalSlice'
// import Modal from '../Modal/Modal'

export const Cart = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(store => store.modal)

    const { amount, total, cartItems } = useSelector(store => store.cart)
    

    useEffect(() => {
        dispatch(getCartItems())
    }, [])

    if (amount < 1) {
        return <section>
            <header>
                <h2> Your bag</h2>
                <h4>is currently empty</h4>
            </header>
        </section>
    }

    return (
        <div>
            <h2>Cart items</h2>
            {/* {isOpen && <Modal />} */}
            <div>
                {cartItems.map((item, i) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <div>
                <hr />
                <h4>Total <span>${total.toFixed(2)}</span></h4>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={() => dispatch(openModal())}
                >Clear cart</button>
            </div>
        </div>
    )
}

import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { removeItem, increase, decrease, increaseTodatabase } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ _id, title, price, amount }) => {
    const dispatch = useDispatch()

    return (
        <div className='cart-item'>
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button
                    className='remove-btn'
                    onClick={() => dispatch(removeItem(_id))}
                >Remove</button>
            </div>
            <div>
                {/* <button className='amount-btn' onClick={() => dispatch(increaseTodatabase({id, title, price, amount}))}>
                <AddIcon/>
            </button> */}
                <button className='amount-btn' onClick={() => {
             
                    dispatch(increase(_id))
                }}>
                    <AddIcon />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={() => {
                           if(amount === 1){
                            dispatch(removeItem(_id))
                            return;
                        }
                    dispatch(decrease(_id))}}>
                    <RemoveIcon />
                </button>
            </div>

        </div>
    )
}

export default CartItem
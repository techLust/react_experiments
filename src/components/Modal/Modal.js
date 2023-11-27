import { useDispatch } from 'react-redux';
import { clearCart } from '../../slices/cartSlice';
import { closeModal } from '../../slices/modalSlice';

const Modal = () => {
    const dispatch = useDispatch();

    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>remove all items from your shopping cart?</h4>
                <div className='btn-container'>
                    <button
                        type='button'
                        className='btn confirm-btn'
                        onClick={() => {
                            dispatch(clearCart())
                            dispatch(closeModal())
                        }}
                    >
                        confirm
                    </button>
                    <button
                        type='button'
                        className='btn clear-btn'
                        onClick={() => {
                            dispatch(closeModal())
                        }}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </aside>

        // <div>

        //     <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        //         Launch demo modal
        //     </button>


        //     <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //         <div className="modal-dialog" role="document">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                         <span aria-hidden="true">&times;</span>
        //                     </button>
        //                 </div>
        //                 <div className="modal-body">
        //                     ...
        //                 </div>
        //                 <div className="modal-footer">
        //                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                     <button type="button" className="btn btn-primary">Save changes</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};
export default Modal;
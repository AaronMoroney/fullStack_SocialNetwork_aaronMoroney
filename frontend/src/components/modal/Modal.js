
import React from 'react'

export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
        {showModal ? <div>Modal</div> : null}
        </>
      )

}

export default Modal
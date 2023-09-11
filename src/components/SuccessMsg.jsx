import React from 'react'

const SuccessMsg = ({ Message, onClose }) => {

    return (
        <div className='sucess-message'>
            <div className='message'></div>
            <button>Close</button>

        </div>
    )
}

export default SuccessMsg

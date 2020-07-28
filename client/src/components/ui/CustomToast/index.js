import React from 'react'

import Toast from 'react-bootstrap/Toast'

const CustomToast = ({ visible, text, handleToast }) => {
    return (
        <Toast style={{ position: 'fixed', right: '550px', top: '70px', width: '700px' }} show={visible} onClose={() => handleToast(false)} delay={3000} autohide>
            <Toast.Header class='toast'> <strong> {text} </strong> </Toast.Header>
            
        </Toast>
    )
}

export default CustomToast
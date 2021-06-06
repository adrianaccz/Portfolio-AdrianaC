import React from 'react';
import '../css/portfolio.css';
import logoMessage from '../images/baseD.jpeg';

function Message() {
    return (
        <div className="message">
            <div className="message_title">
                <p>Por los mometos no se puede enviar mensajes</p>
                <p>Base de datos esta en construcción</p>
            </div>
            <div className="message_img">
            <a href="/message"><img src={logoMessage} className="logoMessage" alt="logo1" /></a>
            </div>
        </div>
    )
}

export default Message

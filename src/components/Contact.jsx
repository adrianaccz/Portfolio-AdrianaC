import React, { useState } from 'react';
import '../css/portfolio.css';
import axios from 'axios';

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();                     // evita que el formulario se vaya antes
        axios.post("/api/eviarContacto",         // suponiendo que tengamos una api para contactos
        {
            name: name,
            email: email,
            message: message
        }); 
        
        console.log(name + email + message);
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="contact">
            <div className="contact_title">
                <h1>Contacto</h1>
            </div>

            <div className="contact_form">
                <form action="/building">
                    <label htmlFor="name"><h4>Nombre: </h4></label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        name="nombre"
                        placeholder="Escribe tu nombre"
                    />

                    <label htmlFor="correo"><h4>Correo: </h4></label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="Escribe tu correo" 
                    />

                    <label htmlFor="mensaje"><h4>Mensaje: </h4></label>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escribe tu comentario"
                    >
                    </textarea>

                    <button onClick="/building" >Enviar</button>  {/* Para que se vaya a la api hay q colocar: onClick={sendMessage" */}
                </form>
            </div>

        </div>
    )
}


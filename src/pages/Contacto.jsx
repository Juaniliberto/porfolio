import { useRef } from 'react';
import '../styles/Contacto.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhoneAndroid } from 'react-icons/md';
import emailjs from "@emailjs/browser";

function ContactForm() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_j18wf9f',
            'template_4m76c4l',
            formRef.current,
            'Wk4rfVz_GffMGALkv'
        ).then(
            (result) => {
                console.log(result.text);
                alert("Mensaje enviado correctamente");
                formRef.current.reset();
            },
            (error) => {
                console.error(error.text);
                alert("Hubo un error, intentá de nuevo más tarde")
            }
        );
    };

    return (
        <form ref={formRef} onSubmit={sendEmail}>
            <input className="input" type="text" name="name" id="nombre" placeholder="Nombre" required/>
            <input className="input" type="text" name="email" id="email" placeholder="Email" required/>
            <textarea className="input" rows={8} name="messege" id="mensaje" placeholder="Mensaje" required></textarea>
            <input className="boton-enviar" type="submit" name="submit" id="submit" placeholder="Enviar"/>
        </form>
    )
}

function Contacto() {

    return (
        <section id='contacto'>
            <div className="contact">
                <div className="contact-text">
                    <h2 className='contact-title'>Contacto</h2>
                    <h3 className='contact-subtitle'>Podés escribirme a través del formulario y te responderé lo antes posible.</h3>
                </div>
                <div className="contact-info">
                    <div className="info">
                        <div className="ctc">
                            <MdEmail className='ctc-icon'/>
                            <h3 className='ctc-txt'>juaniliberto@gmail.com</h3>
                        </div>
                        <div className="ctc">
                            <FaGithub className='ctc-icon' />
                            <a href="https://github.com/Juaniliberto" target='_blank' rel='noopener noreferrer' className='ctc-txt'>https://github.com/Juaniliberto</a>
                        </div>
                        <div className="ctc">
                            <FaLinkedin className='ctc-icon'/>
                            <a href="https://www.linkedin.com/in/juan-ignacio-liberto-703410206/" target='_blank' rel='noopener noreferrer' className='ctc-txt'>https://www.linkedin.com/in/juan-ignacio-liberto-703410206/</a>
                        </div>
                        <div className="ctc">
                            <MdPhoneAndroid className='ctc-icon'/>
                            <h3 className='ctc-txt'>(+54) 011 50611056</h3>
                        </div>
                    </div>
                    <div className="contact-form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto;
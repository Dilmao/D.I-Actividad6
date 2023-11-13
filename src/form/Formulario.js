import { useCallback, useEffect, useState } from "react"

function Fomrulario() {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [sexo, setSexo] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [terminos, setTerminos] = useState("")

    const [mensajeNombre, setMensajeNombre] = useState("")
    const [mensajeApellido, setMensajeApellido] = useState("")
    const [mensajeEmail, setMensajeEmail] = useState("")
    const [mensajeSexo, setMensajeSexo] = useState("")
    const [mensajeMensaje, setMensajeMensaje] = useState("")
    const [mensajeTerminos, setMensajeTerminos] = useState("")
    const [mensajeButton, setMensajeButton] = useState("")

    function handleValidateNombre(event) {
        const enteredNombre = event.target.value
        if(enteredNombre !== "" && enteredNombre.length <= 10) {
            setNombre(enteredNombre)
            setMensajeNombre("")
        } else if(enteredNombre.length > 10) {
            setMensajeNombre("El nombre no debe ser superior a 10 caracteres")
        } else {
            setMensajeNombre("El nombre no puede estar vacio")
        }
    }

    function handleValidateApellido(event) {
        const enteredApellido = event.target.value
        if(enteredApellido !== "" && enteredApellido.length <= 20) {
            setApellido(enteredApellido)
            setMensajeApellido("")
        } else if(enteredApellido.length > 20) {
            setMensajeApellido("El apellido no debe ser superior a 20 caracteres")
        } else {
            setMensajeApellido("El apellido no puede estar vacio")
        }
    }

    function handleValidateEmail(event) {
        const enteredEmail = event.target.value
        if(enteredEmail !== "" && enteredEmail.length <= 20 && enteredEmail.includes("@")) {
            setEmail(enteredEmail)
            setMensajeEmail("")
        } else if(enteredEmail.length > 20) {
            setMensajeEmail("El email no debe ser superior a 20 caracteres")
        } else if(!enteredEmail.includes("@")) {
            setMensajeEmail("El email debe contener un @")
        } else {
            setMensajeEmail("El email no puede estar vacio")
        }
    }

    function handleValidateSexo(event) {
        const enteredSexo = event.target.value
        if(enteredSexo !== "") {
            setSexo(enteredSexo)
            setMensajeSexo("")
        } else {
            setMensajeSexo("El sexo no puede estar vacio")
        }
    }

    function handleValidateMensaje(event) {
        const enteredMensaje = event.target.value
        if(enteredMensaje.length <= 500) {
            setMensaje(enteredMensaje)
            setMensajeMensaje("")
        } else {
            setMensajeMensaje("El mensaje no debe ser superior a 500 caracteres")
        }
    }

    function handleValidateTerminos(event) {
        const enteredTerminos = event.target.checked
        if (enteredTerminos) {
            setTerminos(true)
            setMensajeTerminos("")
        } else {
            setTerminos(false)
            setMensajeTerminos("Se tienen que aceptar los terminos y condiciones")
        }
    }

    const handleValidateAll = useCallback(() => {
        if 
        (
            (nombre !== "" || nombre <= 10) &&
            (apellido !== "" || apellido <= 20) &&
            (email !== "" || email <= 20 || email.includes("@")) &&
            (sexo !== "") &&
            (mensaje.length <= 500) &&
            (terminos)
        ) {
            setMensajeButton("Se puede enviar el formulario")
        } else {
            setMensajeButton("Falta uno o mas campos por rellenar")
        }
    }, [nombre, apellido, email, sexo, mensaje, terminos])

    useEffect(
        function(){
            handleValidateAll();
        },
        [handleValidateAll]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO falta guardar los datos en un array de objetos
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <h1>Formulario</h1>
        
                <label>Introduzca su nombre: </label>
                <input type="text" onChange={handleValidateNombre}/>
                <p>{mensajeNombre}</p>

                <label>Introduzca sus apellidos: </label>
                <input type="text" onChange={handleValidateApellido}/>
                <p>{mensajeApellido}</p>

                <label>Introduzca su email: </label>
                <input type="email" onChange={handleValidateEmail}/>
                <p>{mensajeEmail}</p>

                <label>Introduzca su sexo: </label>
                <select onChange={handleValidateSexo}>
                    <option value=""></option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <p>{mensajeSexo}</p>

                <label>Introduzca su mensaje: </label>
                <textarea onChange={handleValidateMensaje}/>
                <span> Caracteres: {500 - mensaje.length}</span>
                <p>{mensajeMensaje}</p>

                <label>Acepto los terminos y condiciones: </label>
                <input type="checkbox" onChange={handleValidateTerminos}/>
                <p>{mensajeTerminos}</p>

                <br/>
                <button type="submit">Click to submit</button>
                <p>{mensajeButton}</p>
            </div>
        </form>
    )
}

export default Fomrulario
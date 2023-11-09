import { useState } from "react"

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
    
    const [nombreValido, setNombreValido] = useState(true)
    const [apellidoValido, setApellidoValido] = useState(true)
    const [emailValido, setEmailValido] = useState(true)
    const [sexoValido, setSexoValido] = useState(true)
    const [mensajeValido, setMensajeValido] = useState(true)
    const [terminosValido, setTerminosValido] = useState(true)

        //TODO ENVIAR TODAS LAS FUNCIONES A UN CODIGO DIFERENTE
    function handleValidateNombre(event) {
        const enteredNombre = event.target.value
        if(enteredNombre.length > 0 && enteredNombre.length <= 10) {
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
        if(enteredApellido.length > 0 && enteredApellido.length <= 20) {
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
        if(enteredEmail.length > 0 && enteredEmail.length <= 20 && enteredEmail.includes("@")) {
            setEmail(enteredEmail)
            setMensajeEmail("")
            console.log("Email ha sido modificado")
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
        console.log("Sexo ha sido modificado")
    }

    function handleValidateMensaje(event) {
        const enteredMensaje = event.target.value
        if(enteredMensaje.length > 0 && enteredMensaje.length <= 500) {
            setMensaje(enteredMensaje)
            setMensajeMensaje("")
        } else {
            setMensajeMensaje("El mensaje no debe ser superior a 500 caracteres")
        }
    }

    function handleValidateTerminos(event) {
        const enteredTerminos = event.target.value;
        console.log(enteredTerminos);
        
    }

    return (
        <div>
            <h1>Formulario</h1>

            <div><br/>
                <label>Introduzca su nombre: </label>
                <input type="text" name="nombre" onChange={handleValidateNombre}/>
                <p>{mensajeNombre}</p>
            </div>

            <div><br/>
                <label>Introduzca sus apellidos: </label>
                <input type="text" name="apellidos" onChange={handleValidateApellido}/>
                <p>{mensajeApellido}</p>
            </div>

            <div><br/>
                <label>Introduzca su email: </label>
                <input type="email" name="email" onChange={handleValidateEmail}/>
                <p>{mensajeEmail}</p>
            </div>

            <div><br/>
                <label>Introduzca su sexo: </label>
                <select onChange={handleValidateSexo}>
                    <option value=""></option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <p>{mensajeSexo}</p>
            </div>

            <div><br/>
                <label>Introduzca su mensaje: </label>
                <textarea onChange={handleValidateMensaje}></textarea>
                <p>{mensajeMensaje}</p>
            </div>

            <div><br/>
                <label>Acepto los terminos y condiciones: </label>
                <input type="checkbox" onChange={(e) => (console.log(e.target.checked))}/>
                <p>{mensajeTerminos}</p>
            </div>

            <div><br/><br/>
                <button type="submit">Click to submit</button>
            </div>
        </div>
    )
}

export default Fomrulario
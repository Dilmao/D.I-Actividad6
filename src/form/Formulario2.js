import FormularioHandler from "./FormularioHandler"

//Intentar hacer con 'FormularioHandler' para ocupar menos espacio en 'Formulario'

function Fomrulario3() {
    const formHandler = new FormularioHandler()

    return (
        <div>
            <h1>Formulario</h1>

            <div>
                <br/>
                <label>Introduzca su nombre: </label>
                <input type="text" onChange={formHandler.handleValidateNombre}/>
                <p>{formHandler.mensajeNombre}</p>

                <br/>
                <label>Introduzca sus apellidos: </label>
                <input type="text" onChange={formHandler.handleValidateApellido}/>
                <p>{formHandler.mensajeApellido}</p>
            
                <br/>
                <label>Introduzca su email: </label>
                <input type="email" onChange={formHandler.handleValidateEmail}/>
                <p>{formHandler.mensajeEmail}</p>
            
                <br/>
                <label>Introduzca su sexo: </label>
                <select onChange={formHandler.handleValidateSexo}>
                    <option value=""></option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <p>{formHandler.mensajeSexo}</p>
            
                <br/>
                <label>Introduzca su mensaje: </label>
                <textarea onChange={formHandler.handleValidateMensaje}></textarea>
                <p>{formHandler.mensajeMensaje}</p>
            
                <br/>
                <label>Acepto los terminos y condiciones: </label>
                <input type="checkbox" onChange={formHandler.handleValidateTerminos}/>
                <p>{formHandler.mensajeTerminos}</p>
            </div>

            <br/>
            <button type="submit">Click to submit</button>
            
        </div>
    )
}

export default Fomrulario2
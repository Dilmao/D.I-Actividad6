import { useState } from "react";

class FormularioHandler {
    static validateNombre(event, setNombre, setMensajeNombre) {
        const enteredNombre = event.target.value;
        if (enteredNombre !== "" && enteredNombre.length <= 10) {
            setNombre(enteredNombre);
            setMensajeNombre("");
        } else if (enteredNombre.length > 10) {
            setMensajeNombre("El nombre no debe ser superior a 10 caracteres");
        } else {
            setMensajeNombre("El nombre no puede estar vacío");
        }
    }

    static validateApellido(event, setApellido, setMensajeApellido) {
        const enteredApellido = event.target.value;
        if (enteredApellido !== "" && enteredApellido.length <= 20) {
            setApellido(enteredApellido);
            setMensajeApellido("");
        } else if (enteredApellido.length > 20) {
            setMensajeApellido("El apellido no debe ser superior a 20 caracteres");
        } else {
            setMensajeApellido("El apellido no puede estar vacío");
        }
    }

    static validateEmail(event, setEmail, setMensajeEmail) {
        const enteredEmail = event.target.value;
        if (enteredEmail !== "" && enteredEmail.length <= 20 && enteredEmail.includes("@")) {
            setEmail(enteredEmail);
            setMensajeEmail("");
        } else if (enteredEmail.length > 20) {
            setMensajeEmail("El email no debe ser superior a 20 caracteres");
        } else if (!enteredEmail.includes("@")) {
            setMensajeEmail("El email debe contener un @");
        } else {
            setMensajeEmail("El email no puede estar vacío");
        }
    }

    static validateSexo(event, setSexo, setMensajeSexo) {
        const enteredSexo = event.target.value;
        if (enteredSexo !== "") {
            setSexo(enteredSexo);
            setMensajeSexo("");
        } else {
            setMensajeSexo("El sexo no puede estar vacío");
        }
        console.log("Sexo ha sido modificado");
    }

    static validateMensaje(event, setMensaje, setMensajeMensaje) {
        const enteredMensaje = event.target.value;
        if (enteredMensaje.length <= 500) {
            setMensaje(enteredMensaje);
            setMensajeMensaje("");
        } else {
            setMensajeMensaje("El mensaje no debe ser superior a 500 caracteres");
        }
    }

    static validateTerminos(event, setTerminos, setMensajeTerminos) {
        const enteredTerminos = event.target.checked;
        if (enteredTerminos) {
            setTerminos(true);
            setMensajeTerminos("");
        } else {
            setTerminos(false);
            setMensajeTerminos("Se tienen que aceptar los términos y condiciones");
        }
    }
}

export default FormularioHandler
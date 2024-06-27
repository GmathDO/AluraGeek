import "./Formulario.css"
import { useState } from "react"
import CampoTexto from "../CampoTexto"

const Formulario = (props) => {
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [imagen, setImagen] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            precio,
            imagen
        }
        props.registrarProducto(datosAEnviar)
    }

    const limpiar = (e) => {
        e.preventDefault()
        setNombre("")
        setPrecio("")
        setImagen("")
    }

    return <section className="formulario-container">
        <form>
            <h1 className="title">AGREGAR PRODUCTO:</h1>
            <CampoTexto placeholder="nombre" id="nombre" required valor={nombre} setValor={setNombre}/>
            <CampoTexto placeholder="precio" id="precio" required valor={precio} setValor={setPrecio} />
            <CampoTexto placeholder="imagen" id="imagen" required valor={imagen} setValor={setImagen} />
            <div className="buttons">
                <button className="enviar-button" onClick={manejarEnvio}>Enviar</button>
                <button className="limpiar-button" onClick={limpiar}>Limpiar</button>
            </div>
        </form>
    </section>
}

export default Formulario
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const { valor, placeholder, id, required, setValor } = props

    const actualizarValor = (e) => {
        setValor(e.target.value)
    }

    return <input type="text" placeholder={`${placeholder}...`} value={valor} id={id} required={required} onChange={actualizarValor}/>
}

export default CampoTexto
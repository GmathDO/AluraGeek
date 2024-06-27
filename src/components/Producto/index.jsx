import "./Producto.css"

const Producto = (props) => {
    const { nombre, precio, imagen, id } = props.producto
    const { eliminarProducto } = props

    return <div className="card">
            <div className="img-container">
                <img src={imagen} alt="producto" />
            </div>
            <div className="card--info">
                <p className="product-name">{nombre}</p>
                <div className="card--value">
                    <p>{`$ ${precio}`}</p>
                    <img src="../img/Vector.png" alt="trash icon" className="borrar-icon" onClick={() => eliminarProducto(id)}/>
                </div>
            </div>
        </div>
}

export default Producto
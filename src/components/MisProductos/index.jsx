import "./MisProductos.css"
import ListaProductos from "../ListaProductos"

const MisProductos = (props) => {
    return <section className="productos-container">
        <h1 className="title">MIS PRODUCTOS:</h1>
        <ListaProductos productos={props.productos} eliminarProducto={props.eliminarProducto} />
    </section>
}

export default MisProductos
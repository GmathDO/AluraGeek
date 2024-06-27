import "./ListaProductos.css"
import Producto from "../Producto"

const ListaProductos = (props) => {

    return <div className="card-section">
                <div className="cards-container">
                    {props.productos.map( (producto) => <Producto producto={producto} key={producto.id} eliminarProducto={props.eliminarProducto}/> )}
                </div>
            </div>
}

export default ListaProductos
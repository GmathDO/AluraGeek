import "./Main.css"
import { useEffect, useState } from "react"
import MisProductos from "../MisProductos"
import Formulario from "../Formulario"

const Main = () => {
    const [ productos, setProductos ] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("http://localhost:5000/productos");
                const data = await res.json();
                setProductos([...data]);
            } catch(error){
                alert(error)                
            }
        }
        getData();
    }, [])

    const eliminarProducto = async (id) => {
        const borrar = await fetch(`http://localhost:5000/productos/${id}`, {
            method:"DELETE"
        })
        try {
            const res = await fetch("http://localhost:5000/productos")
            const data = await res.json()
            setProductos(data)
        } catch(error){
            alert(error)
        }   
    }

    const registrarProducto= async (producto) => {
        const { nombre, precio, imagen } = producto
        const res = await fetch("http://localhost:5000/productos", {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                nombre,
                precio,
                imagen
            })
        })
        const data = await res.json();
        if(res.ok){
            setProductos([...productos, data])
        } else {
            console.log("Error al registrar producto")
        }
    }

    return <main>
        <MisProductos productos={productos} eliminarProducto={eliminarProducto}/>
        <Formulario registrarProducto={registrarProducto} />
    </main>
}

export default Main
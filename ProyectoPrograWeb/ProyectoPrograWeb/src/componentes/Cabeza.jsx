import React from 'react'

/* Aqui se deben importar las hojas de estilo, segun la carpeta s06-01*/

function Cabeza() {

    return (
        <>
        <header>
             <nav>
                 <ul>
                <li><a href="#!">Tienda</a></li>
                <li><a href="#!">Más vendidos</a></li>
                <li><a href="#!">Nuevos</a></li>
                <li><a href="#!">Ofertas</a></li>
                 </ul>
                 <div>
                <input type="search" placeholder="Busca productos por nombre...">
                <button>Buscar</button>
                </div>
                 <ul>
                <li><a href="#!">Ayuda</a></li>
                <li><a href="#!">Mi Cuenta</a></li>
                  </ul>
             </nav>
         </header>
        </>
    )
    
}


export default Cabeza
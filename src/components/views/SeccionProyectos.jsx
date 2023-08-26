import { useState } from "react";
import SliderProyectos from "../common/SliderProyectos";
import TituloSeccion from "../common/TituloSeccion";

const SeccionProyectos = ({id}) => {
    const [proyectos, setProyectos] = useState([
        {
            nombre: "Volcadora de Bins",
            categoria: "Industria Citrícola",
            imagenes: [
                "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora.png",
                "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_1.png",
                "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_2.png",
                "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_3.png",
                "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_4.png"
            ],
            descripcion: "En este proyecto se desarrolló una volcadora de bines diseñada para la industria citrícola. El diseño incluyó toda la estructura metálica y el mecanismo de volteo hidráulico. Se utilizó SolidWorks para crear el modelo en 3D y se generaron planos de fabricación."
        },
        {
            nombre: "Paletizadora Automática",
            categoria: "Industria Citrícola",
            imagenes: [
                "./src/assets/img/proyectos/paletizadoraAutomatica/img_paletizadora_automatica_1.png",
                "./src/assets/img/proyectos/paletizadoraAutomatica/img_paletizadora_automatica_2.png",
            ],
            descripcion: "El diseño se realizó sobre una paletizadora automática de envases de cartón para el uso en empaques citrícolas. El diseño incluyó el mecanismo de posicionamiento y movimiento en diferentes ejes de acción. Se utilizó SolidWorks para crear el modelo en 3D y se generaron planos de fabricación."
        },
        {
            nombre: "Generador Eólico Vertical (VAWT)",
            categoria: "Energías Renovables",
            imagenes: [
                "./src/assets/img/proyectos/vawt/img_vawt_1.png",
                "./src/assets/img/proyectos/vawt/img_vawt_2.png",
                "./src/assets/img/proyectos/vawt/img_vawt_3.png",
            ],
            descripcion: "Este proyecto se enfocó en el diseño de un generador eólico vertical (VAWT) creado para aprovechar las energía eólica y la optimización del espacio. Se diseñó un mecanismo para modificar la orientación de las aspas del generador. Se utilizó SolidWorks para modelar en 3D y se generaron planos detallados para la fabricación."
        },
        {
            nombre: "Marco para Filtro de Partículas - Gabinete Cooler Master Masterbox Q300l",
            categoria: "Diseño Personalizado",
            imagenes: [
                "./src/assets/img/proyectos/marcoFiltroGabinete/img_marco_filtro_q300l_1.jpg",
                "./src/assets/img/proyectos/marcoFiltroGabinete/img_marco_filtro_q300l_2.jpg",
                "./src/assets/img/proyectos/marcoFiltroGabinete/img_marco_filtro_q300l_3.jpg",
                "./src/assets/img/proyectos/marcoFiltroGabinete/img_marco_filtro_q300l_4.jpg",
            ],
            descripcion: "Este proyecto se centró en crear un marco personalizado para filtro de partículas, diseñado para el gabinete Cooler Master MasterBox Q300L. El diseño se adaptó para mejorar la eficiencia en el filtrado, así como tambien para modificar la estética del gabinete. Se utilizó SolidWorks para crear el modelo en 3D y se realizó la impresion 3D del mismo."
        },
    ])
    
    return (
        <section className="bg-light" id={id}>
            <div className="container mx-auto">
            <TituloSeccion tituloSeccion={"En qué proyectos trabajé?"} />
            <SliderProyectos proyectos={proyectos}/>
            </div>
        </section>
    );
};

export default SeccionProyectos;
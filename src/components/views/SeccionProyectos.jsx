import { useState } from "react";
import SliderProyectos from "../common/SliderProyectos";
import TituloSeccion from "../common/TituloSeccion";

const SeccionProyectos = ({ id }) => {
  const [proyectos, setProyectos] = useState([
    {
      nombre: "Volcadora de Bins",
      categoria: "Industria Citrícola",
      imagenes: [
        "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora.png",
        "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_1.png",
        "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_2.png",
        "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_3.png",
        "./src/assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_4.png",
      ],
      descripcion:
        "Diseño de una volcadora de bines para la industria citrícola. El diseño incluyó la estructura y el mecanismo de volteo hidráulico.",
      tecnologias: ["Solidworks"],
    },
    {
      nombre: "Paletizadora Automática",
      categoria: "Industria Citrícola",
      imagenes: [
        "./src/assets/img/proyectos/paletizadoraAutomatica/img_paletizadora_automatica_1.png",
        "./src/assets/img/proyectos/paletizadoraAutomatica/img_paletizadora_automatica_2.png",
      ],
      descripcion:
        "Diseño de una paletizadora automática de envases de cartón para el uso en empaques citrícolas. El diseño incluyó el mecanismo de movimiento y posicionamiento.",
      tecnologias: ["Solidworks"],
    },
    {
      nombre: "Generador Eólico Vertical (VAWT)",
      categoria: "Energías Renovables",
      imagenes: [
        "./src/assets/img/proyectos/vawt/img_vawt_1.png",
        "./src/assets/img/proyectos/vawt/img_vawt_2.png",
        "./src/assets/img/proyectos/vawt/img_vawt_3.png",
      ],
      descripcion:
        "Diseño de un generador eólico vertical (VAWT). Se diseñó un mecanismo para modificar la orientación de las aspas del generador.",
      tecnologias: ["Solidworks"],
    },
    {
      nombre: "Marco para Filtro - Gabinete de PC",
      categoria: "Diseño Personalizado",
      imagenes: [
        "./src/assets/img/proyectos/marcoFiltroGabinete/img_marco_filtro_q300l_1.jpg",
        "./src/assets/img/proyectos/marcoFiltroGabinete/img_marco_filtro_q300l_2.jpg",
        "./src/assets/img/proyectos/marcoFiltroGabinete/img_marco_filtro_q300l_3.jpg",
        "./src/assets/img/proyectos/marcoFiltroGabinete/img_marco_filtro_q300l_4.jpg",
      ],
      descripcion:
        "Diseño de un marco personalizado para filtro de partículas, diseñado para el gabinete Cooler Master MasterBox Q300L.",
      tecnologias: ["Solidworks", "Prusa Slicer", "Artillery Hornet"],
    },
  ]);

  return (
    <section className="bg-light" id={id}>
      <div className="container mx-auto">
        <TituloSeccion tituloSeccion={"En qué proyectos trabajé?"} />
        <SliderProyectos proyectos={proyectos} />
      </div>
    </section>
  );
};

export default SeccionProyectos;

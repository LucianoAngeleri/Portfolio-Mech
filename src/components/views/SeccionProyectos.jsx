import { useState } from "react";
import SliderProyectos from "../common/SliderProyectos";
import TituloSeccion from "../common/TituloSeccion";
const SeccionProyectos = ({id}) => {
    const [proyectos, setProyectos] = useState([
        {
            nombre: "Volcadora de Bins",
            categoria: "Industria Citrícola",
            imagenes: [
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_1.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_2.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_3.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_4.png"
            ],
            descripcion: "Este proyecto de diseño mecánico se enfocó en crear una volcadora de bines adaptada a las necesidades de la industria citrícola. Se definió un diseño basado en un mecanismo de volteo hidráulico. Utilizando SolidWorks, se modeló el diseño en 3D y luego se generaron los planos de fabricación."
        },
        {
            nombre: "Volcadora de Bins",
            categoria: "Industria Citrícola",
            imagenes: [
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_1.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_2.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_3.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_4.png"
            ],
            descripcion: "Este proyecto de diseño mecánico se enfocó en crear una volcadora de bines adaptada a las necesidades de la industria citrícola. Se definió un diseño basado en un mecanismo de volteo hidráulico. Utilizando SolidWorks, se modeló el diseño en 3D y luego se generaron los planos de fabricación."
        },
        {
            nombre: "Volcadora de Bins",
            categoria: "Industria Citrícola",
            imagenes: [
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_1.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_2.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_3.png",
                "../../assets/img/proyectos/volcadoraDeBins/img_volcadora_iso_4.png"
            ],
            descripcion: "Este proyecto de diseño mecánico se enfocó en crear una volcadora de bines adaptada a las necesidades de la industria citrícola. Se definió un diseño basado en un mecanismo de volteo hidráulico. Utilizando SolidWorks, se modeló el diseño en 3D y luego se generaron los planos de fabricación."
        },
    ])

    return (
        <section className="bg-light container mx-auto" id={id}>
            <TituloSeccion tituloSeccion={"En qué proyectos trabajé?"} />
            <SliderProyectos proyectos={proyectos} />
        </section>
    );
};

export default SeccionProyectos;
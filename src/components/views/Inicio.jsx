import SeccionTexto from "../common/SeccionTexto";
import SeccionHero from "./SeccionHero";

const seccionAcercaDeMi = {
    titulo: "Acerca de mí",
    contenido: `El diseño mecánico es mi pasión por lo que estoy creando un
    proyecto personal enfocado en brindar soluciones de diseño personalizadas y de calidad,
    haciendo uso de la impresión 3D y SOLIDWORKS.
    Mi enfoque se caracteriza por la creatividad, la atención a los detalles
    y la búsqueda constante de la excelencia.`
}

const Inicio = () => {
    return (
        <>
            <SeccionHero />
            <SeccionTexto titulo={seccionAcercaDeMi.titulo} contenido={seccionAcercaDeMi.contenido} palabrasClaves={seccionAcercaDeMi.palabrasClaves} />
        </>
    );
};

export default Inicio;
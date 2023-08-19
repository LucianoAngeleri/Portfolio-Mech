import Slider from "../common/Slider";

const SeccionTech = () => {
    const tecnologias = [
        {
            nombre: "Solidworks",
            src: "../../assets/img/tecnologias/solidworks.svg",
        },
        {
            nombre: "Autodesk AutoCAD",
            src: "/src/assets/img/tecnologias/autocad.png",
        },
        {
            nombre: "Autodesk",
            src: "../../assets/img/tecnologias/autodesk.svg",
        },
        {
            nombre: "Utilmaker Cura",
            src: "../../assets/img/tecnologias/ultimakerCura.png",
        },
        {
            nombre: "Artillery",
            src: "../../assets/img/tecnologias/artillery.png",
        },
    ]
    return (
        <section className='container bg-light' id="seccionTecnologias">
            <h3 className="font-display font-black text-3xl text-dark mb-2">¿Qué tecnologías y herramientas utilizo?</h3>
            <hr className="text-primary border-dashed mb-3" />
            <Slider tecnologias={tecnologias} />
        </section>
    );
};

export default SeccionTech;
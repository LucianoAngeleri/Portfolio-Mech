import Slider from "../common/Slider";

const SeccionTech = ({id}) => {
    const tecnologias = [
        {
            nombre: "Solidworks",
            src: "./src/assets/img/tecnologias/solidworks.svg",
        },
        {
            nombre: "Autodesk AutoCAD",
            src: "./src/assets/img/tecnologias/autocad.png",
        },
        {
            nombre: "Autodesk",
            src: "./src/assets/img/tecnologias/autodesk.svg",
        },
        {
            nombre: "Utilmaker Cura",
            src: "./src/assets/img/tecnologias/ultimakerCura.png",
        },
        {
            nombre: "Artillery",
            src: "./src/assets/img/tecnologias/artillery.png",
        },
    ]
    return (
        <section className='py-6 bg-light' id={id}>
            <div className="container">
                <h3 className="font-display font-black text-3xl text-dark mb-2">¿Qué tecnologías y herramientas utilizo?</h3>
                <hr className="text-primary border-dashed mb-3" />
                <Slider tecnologias={tecnologias}/>
            </div>
        </section>
    );
};

export default SeccionTech;
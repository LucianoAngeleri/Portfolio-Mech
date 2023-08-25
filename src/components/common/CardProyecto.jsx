import SliderImgCard from "./SliderImgCard";

const CardProyecto = ({ proyecto }) => {
    return (
        <article className="border-2 rounded-2xl p-4 bg-light shadow-xl">
            <SliderImgCard proyecto={proyecto} />
            <h4 className="text-primary text-md font-heading my-4">{proyecto.categoria}</h4>
            <h3 className="text-dark font-heading text-lg font-semibold my-4">{proyecto.nombre}</h3>
            <hr className="border-primary border-dashed my-4" />
            <p className="font-body font-base my-4">{proyecto.descripcion}</p>
            <hr className="border-primary border-dashed my-4" />
            <div className="block">
                <button className="w-full px-8 py-4 bg-primary border-dark border-2 rounded-3xl font-body font-bold text-dark" type="button">+ Ver Más</button>
            </div>
        </article>
    );
};

export default CardProyecto;
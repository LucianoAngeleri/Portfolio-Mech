import { PlusIcon } from "@heroicons/react/24/solid";
import SliderImgCard from "./SliderImgCard";

const CardProyecto = ({ proyecto }) => {
    return (
        <article className="border-2 border-dark rounded-3xl p-4 bg-light shadow-xl">
            <SliderImgCard proyecto={proyecto} />
            <h3 className="text-dark font-heading text-lg font-semibold my-3">{proyecto.nombre}</h3>
            <h4 className="text-primary text-md font-heading my-2">{proyecto.categoria}</h4>
            <p className="font-body font-base my-4">{proyecto.descripcion}</p>
            <hr className="border-primary border-dashed my-4" />
            <div className="block">
                <button className="w-full inline-flex justify-center px-8 py-4 bg-primary border-dark border-2 rounded-3xl font-body font-bold text-dark" type="button"><PlusIcon className="w-6 h-6 pe-1"/>Ver Más</button>
            </div>
        </article>
    );
};

export default CardProyecto;
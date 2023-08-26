import { PlusIcon } from "@heroicons/react/24/solid";
import SliderImgCard from "./SliderImgCard";

const CardProyecto = ({ proyecto }) => {
    return (
        <article className="border-2 border-dark rounded-3xl p-4 bg-light shadow-lg">
            <SliderImgCard proyecto={proyecto} />
            <h3 className="text-dark font-heading text-lg font-semibold my-3 h-14">{proyecto.nombre}</h3>
            <h4 className="text-primary-400 text-md font-heading my-2">{proyecto.categoria}</h4>
            <p className="font-body font-base my-4 h-36 line-clamp-8">{proyecto.descripcion}</p>
            <hr className="border-primary-400 border-dashed my-4" />
            <div className="block">
                <button className="w-full inline-flex justify-center px-8 py-4 bg-primary-400 border-dark border-2 rounded-3xl font-body font-bold text-dark hover:bg-primary-500 active:bg-primary-700 active:text-light" type="button"><PlusIcon className="w-6 h-6 pe-1" />Ver Más</button>
            </div>
        </article>
    );
};

export default CardProyecto;
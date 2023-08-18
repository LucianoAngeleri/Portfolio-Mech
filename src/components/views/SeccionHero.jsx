import imgLuciano from "../../assets/img/FotoPerfil.jpg"
import formaCentro from "../../assets/img/svg/formaCentro.svg"
import formaFlecha from "../../assets/img/svg/formaFlecha.svg"

const SeccionHero = () => {
    return (
        <>
            <section className="flex flex-col gap-8 pt-32 bg-light">
                <div className="container md:px-10 md:py-10">
                    <div className="flex items-center justify-evenly gap-4">
                        <h1 className="text-center font-display font-black text-4xl text-primary leading-[85%] px-2 pt-3 pb-5">Luciano Angeleri</h1>
                        <div className="relative isolate">
                            <img className="w-32 object-cover object-center rounded-b-3xl rounded-tr-3xl shadow-lg" alt="César Luciano Angeleri" src={imgLuciano} />
                            <div className="absolute -top-5 -left-5" >
                                <img alt="Centro" src={formaCentro} />
                            </div>
                            <div className="absolute -bottom-4 -left-40" >
                                <img className="" alt="Flecha" src={formaFlecha} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="font-display font-black text-3xl text-dark mb-2">Acerca de mí</h2>
                    <hr className="text-primary border-dashed mb-3"/>
                    <div className="container">
                        <p className="text-dark text-base font-body">
                            El <b>diseño mecánico</b> es mi pasión por lo que estoy creando un proyecto personal enfocado en <b>brindar soluciones
                            de diseño personalizadas y de calidad</b>, haciendo uso de la <b>impresión 3D y SOLIDWORKS</b>.&nbsp;&nbsp;
                            <br />
                            Mi enfoque se caracteriza por la <b>creatividad</b>, la <b>atención a los detalles</b> y la <b>búsqueda constante de la
                            excelencia.</b>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SeccionHero;

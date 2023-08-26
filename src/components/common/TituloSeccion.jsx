const TituloSeccion = ({ tituloSeccion }) => {
    return (
        <>
            <h2 className="font-display font-black text-3xl text-dark mb-2">{tituloSeccion}</h2>
            <hr className="text-primary-400 border-dashed mb-3" />
        </>
    );
};

export default TituloSeccion;
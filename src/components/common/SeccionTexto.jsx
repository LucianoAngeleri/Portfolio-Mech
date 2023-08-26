const SeccionTexto = ({ id, titulo, contenido }) => {

    return (
        <section className="py-6 bg-light" id={id}>
            <div className="container">
                <h2 className="font-display font-black text-3xl text-dark mb-2">
                    {titulo}
                </h2>
                <hr className="text-primary-400 border-dashed mb-3" />
                <p className="my-3 text-dark text-base font-body">{contenido}</p>
            </div>
        </section>
    );
};

export default SeccionTexto;

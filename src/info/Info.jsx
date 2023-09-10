const Info = ({name, title}) => {
    return(
        <div className="div-container-info">
            <div className="div-card">
                <h1 className="info-name">{name}</h1>
                <p className="info-title">{title}</p>
            </div>
        </div>
    );
};

export default Info;
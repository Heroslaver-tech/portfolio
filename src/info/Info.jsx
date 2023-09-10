const Info = ({name, title}) => {
    return(
        <div className="div-info">
            <h1 className="info-name">{name}</h1>
            <p className="info-title">{title}</p>
        </div>
    );
};

export default Info;
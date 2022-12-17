import './style.css';

export const Card = ({ children }) => {
    return <div className="card__container">
        {children}
    </div>
}

export const CardImage = ({ image }) => {
    return <div className="card-image__container">
        <img src={image} alt="Cartaz do filme"/>        
    </div>
} 
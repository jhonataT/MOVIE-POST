import './style.css';

export const LinkButton = ({ type = 'primary', label, goTo = '#', disabled}) => {
    return <div className={`button__container ${type} ${disabled ? 'disabled' : ''}`}>
        <a href={goTo} target="_blank">{label}</a>
    </div>
}
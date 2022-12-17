import './style.css';

export const Header = ({ title, subTitle }) => {
    return <header>
        <section>
            <h5>{title}</h5>
            <h1>{subTitle}</h1>
        </section>
    </header>
}
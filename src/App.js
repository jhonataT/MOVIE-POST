import { Card, CardImage } from './Components/Card';
import { Header } from './Components/Header';
import { BsClock } from 'react-icons/bs';
import movieImage from './assets/images/cardImage.png';
import stars from './assets/images/stars.png'

import './style.css';
import { LinkButton } from './Components/Button';

const movieDescription = `Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos.
No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge,
e Jake deve travar uma guerra difícil contra os humanos.`;

export const App = () => {
    return <main>
        <div className="main__container">
            <Header
                title="ESTÁ DISPONÍVEL AGORA!"
                subTitle="AVATAR 2"
            />
            <Card>
                <CardImage image={movieImage}/>
                <div className="movie__details__container">
                    <section className="movie__description">
                        <p>{movieDescription && movieDescription}</p>
                    </section>
                    <section className="movie__classication_container">   
                        <div>
                            <BsClock/>
                            <span>3h 12m</span>
                        </div>
                        <img src={stars} alt="Avaliação"/>
                        <span>2022</span>
                    </section>
                    <section className="movie__button__container">
                        <LinkButton label="ASSISTIR AGORA" disabled/>
                        <LinkButton type="secondary" label="TRAILER" goTo="https://www.youtube.com/watch?v=8Z0kSkUr17Y"/>
                    </section>
                </div>
            </Card>
        </div>
    </main>
}
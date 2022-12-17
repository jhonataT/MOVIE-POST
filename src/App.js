import { Card, CardImage } from './Components/Card';
import { Header } from './Components/Header';
import MovieImage from './assets/images/cardImage.png';
import './style.css';

export const App = () => {
    return <main>
        <div className="main__container">
            <Header
                title="ESTÁ DISPONÍVEL AGORA!"
                subTitle="AVATAR 2"
            />
            <Card>
                <CardImage image={MovieImage}/>
            </Card>
        </div>
    </main>
}
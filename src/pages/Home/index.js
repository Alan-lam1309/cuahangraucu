import images from '~/assets/images';
import Button from '~/components/Button';
import style from './Home.module.scss';

function Home() {
    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.left }>
                    <h1 className={style.textWelcome}>Welcome to</h1>
                    <div className={style.veggo}>
                        <img src={images.v} alt='v'/>
                        <img src={images.e} alt='e'/>
                        <img src={images.g1} alt='g1'/>
                        <img src={images.g2} alt='g2'/>
                        <img src={images.o} alt='o'/>
                    </div>
                    <Button to='/vegetable' rounded large >Let's shopping</Button>
                </div>
                <div className={style.right}>
                    
                </div>
            </div>
            <div className={style.threeCriteria}>
                <Button to='/' square large>Free delivery</Button>
                <Button to='/' square large>Local products</Button>
                <Button to='/' square large>Always fresh  healthy</Button>
            </div>
        </div>
    );
}

export default Home;

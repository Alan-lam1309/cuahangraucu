import { IconDeli,IconFire,IconLike } from '~/assets/icons/Home';
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
                        <img src={images.v} alt='v' className={style.veo}/>
                        <img src={images.e} alt='e' className={style.veo}/>
                        <img src={images.g1} alt='g1'/>
                        <img src={images.g2} alt='g2'/>
                        <img src={images.o} alt='o' className={style.veo}/>
                    </div>
                    <Button to='/vegetable' rounded large className={style.btnShopping} >Let's shopping</Button>
                </div>
                <div className={style.right}>
                    <img src={images.hinh1} className={style.hinh1} alt='hinh1'/>
                    <img src={images.hinh2} className={style.hinh2} alt='hinh2'/>
                    <img src={images.hinh3} className={style.hinh3} alt='hinh3'/>
                </div>
            </div>
            <div className={style.threeCriteria}>
                <Button to='/' square large lefticon={<IconDeli />}>Free delivery</Button>
                <Button to='/' square large lefticon={<IconFire />}>Local products</Button>
                <Button to='/' square large lefticon={<IconLike />}>Always fresh  healthy</Button>
            </div>
        </div>
    );
}

export default Home;

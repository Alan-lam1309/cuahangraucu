import { IconDeli,IconFire,IconLike } from '~/assets/icons/Home';
import { memo } from 'react';

import images from '~/assets/images';
import Button from '~/components/Button';
import style from './Home.module.scss';
import Footer from '~/components/Layout/DefaultLayout/Footer';

function Home() {

    

    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.left}>
                    <h1 className={style.textWelcome}>Welcome to</h1>
                    <div className={style.veggo}>
                        <img src={images.v} alt="v" className={style.veo} />
                        <img src={images.e} alt="e" className={style.veo} />
                        <img src={images.g1} alt="g1" />
                        <img src={images.g2} alt="g2" />
                        <img src={images.o} alt="o" className={style.veo} />
                    </div>
                    <Button to="/vegetable" rounded large className={style.btnShopping}>
                        Let's shopping
                    </Button>
                </div>
                <div className={style.right}>
                    <img src={images.hinh1} className={style.hinh1} alt="hinh1" />
                    <img src={images.hinh2} className={style.hinh2} alt="hinh2" />
                    <img src={images.hinh3} className={style.hinh3} alt="hinh3" />
                </div>
            </div>
            <div className={style.threeCriteria}>
                <Button to="/" square large lefticon={<IconDeli />}>
                    Free delivery
                </Button>
                <Button to="/" square large lefticon={<IconFire />}>
                    Local products
                </Button>
                <Button to="/" square large lefticon={<IconLike />}>
                    Always fresh healthy
                </Button>
            </div>

            <div className={style.bodyhome}>
                <h3 className={style.textWhatTheySay}>
                    What's They Says
                    <div className={style.line}></div>
                </h3>

                <p>See what other shopper say about us</p>

                <div className={style.whattheysay}>
                    <div className={style.whattheysay_row}>
                        <div className={style.whattheysay_3column}>
                            <div className={style.whattheysay_background1}>
                                <h3 className={style.whattheysayheading}>Fast Delivey</h3>
                                <p className={style.whattheysaytext}>
                                    “I always shopping at Fruity via website and they offer fast delivery service ”
                                </p>
                                <img src={images.hinh1} className={style.whattheysayimage} alt="hinh1" />
                                <p className={style.whattheysaycustomer}>
                                    Tyler Alcacea <div className={style.whattheysaycustomer_opacity}>Toronto CA</div>
                                </p>
                            </div>
                        </div>

                        <div className={style.whattheysay_3column}>
                            <div className={style.whattheysay_background2}>
                                <h3 className={style.whattheysayheading}>Freshness</h3>
                                <p className={style.whattheysaytext}>
                                    “All fruits was fresh and organic . It’s free and 100% from our local farmers”
                                </p>
                                <img src={images.hinh1} className={style.whattheysayimage} alt="hinh1" />
                                <p className={style.whattheysaycustomer}>
                                    Tyler Alcacea <div className={style.whattheysaycustomer_opacity}>Toronto CA</div>
                                </p>
                            </div>
                        </div>

                        <div className={style.whattheysay_3column}>
                            <div className={style.whattheysay_background3}>
                                <h3 className={style.whattheysayheading}>Multi PayMent</h3>
                                <p className={style.whattheysaytext}>
                                    “Really love the app when Fruity offers me a discount for new comer”
                                </p>
                                <img src={images.hinh1} className={style.whattheysayimage} alt="hinh1" />
                                <p className={style.whattheysaycustomer}>
                                    Tyler Alcacea <div className={style.whattheysaycustomer_opacity}>Toronto CA</div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.clear}></div>

                <div className={style.contact}>
                    <img src={images.hinh4} className={style.contact_image} alt="hinh4" />
                    <div className={style.contact_content}>
                        <h3 className={style.contact_title}>Keep Update</h3>
                        <p className={style.contact_text}>
                            Join our mailing list to get offers, discounts and other news frequently by fill your e-mail
                            below.
                        </p>
                        <input placeholder="Type your E-Mail" className={style.contact_input}></input>
                        <Button to="/contact" small className={style.btnSubmit}>
                            {' '}
                            Yes I do{' '}
                        </Button>
                    </div>
                </div>
            </div>

            <div className={style.clear}></div>

            <Footer></Footer>
        </div>
    );
}

export default memo(Home);


import Button from '~/components/Button';

import images from '~/assets/images';

import style from './Footer.module.scss';



function Footer() {

    return (
        <footer className={style.footer} >
                    <div className={style.pages}>   
                        <span>How To's</span>

                        <Button to={'/aboutUs'} text small className={style.page}>
                            About
                        </Button>
                        <Button to={'/howtoshop'} text small className={style.page}>
                            How to shop
                        </Button>
                        <Button to={'/contact'} text small className={style.page}>
                            Contact Us
                        </Button>
                    </div>

                    <div className={style.pages}>
                        <span>Follow us</span>
                        <img src={images.facebook} className={style.hinhfooter} alt='hinh1'/>
                        <img src={images.instagram} className={style.hinhfooter} alt='hinh1'/>
                        <img src={images.twitter} className={style.hinhfooter} alt='hinh1'/>                    
                    </div>

                    <div className={style.pages}>
                        <span>DownLoad Our App</span>
                        <img src={images.googleplay} alt='iphone'/>
                        <img src={images.appstore} alt='android'/>

                    </div>

                    <img src={images.paypal} className={style.footer_thanhtoan} alt='footer_thanhtoan'/>
            </footer>
    );
}

export default Footer;

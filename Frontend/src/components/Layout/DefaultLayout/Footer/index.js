import Button from '~/components/Button';

import images from '~/assets/images';

import style from './Footer.module.scss';



function Footer() {

    return (
        <footer className={style.footer}>

            <div className={style.footer_settings}>
                <div className={style.footer_settings_column1}>   
                    <div className={style.footer_heading}>How To's</div>

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
                    <div className={style.footer_heading}>Follow us</div>
                    <a href="https://www.facebook.com/bo.be.56863">
                        <img  src={images.facebook} className={style.hinhfooter} alt='hinh1'/>
                    </a>   
                    <a href="https://www.instagram.com/__phucs__/">
                        <img src={images.instagram} className={style.hinhfooter} alt='hinh1'/>
                    </a>
                    <a href="https://twitter.com/home?lang=vi">
                        <img src={images.twitter} className={style.hinhfooter} alt='hinh1'/>   
                    </a>                

                    <div>DownLoad Our App</div>
                    <a href='https://play.google.com/store/apps/details?id=com.google.android.apps.photosgo'>
                        <img src={images.googleplay} className={style.hinhfooter2} alt='android'/>
                    </a>
                    <a href='https://www.apple.com/app-store/'>
                        <img src={images.appstore} className={style.hinhfooter2} alt='iphone'/>
                    </a>
                </div>
            </div>

                <img src={images.paypal} className={style.footer_thanhtoan} alt='footer_thanhtoan'/>
            </footer>
    );
}

export default Footer;
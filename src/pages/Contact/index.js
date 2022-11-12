
import Button from '~/components/Button';
import images from '~/assets/images';
import Footer from '~/components/Layout/DefaultLayout/Footer';

import style from './contact.module.scss';



function Contact() {
    return (
        <div className={style.wrapper}>
            <div className={style.bodyhome}>
                <img src={images.test} className={style.contact_image} alt="contact_image" />
            </div>

            <Button to="/vegetable" small className={style.btnSubmit}>
                Contact Me
            </Button>

            <Footer></Footer>
        </div>
    );
}

export default (Contact);


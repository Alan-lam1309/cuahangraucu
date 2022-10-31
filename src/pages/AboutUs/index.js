// import { IconDeli,IconFire,IconLike } from '~/assets/icons/Home';
// import { memo } from 'react';

import images from '~/assets/images';
import Footer from '~/components/Layout/DefaultLayout/Footer';
// import Button from '~/components/Button';
import style from './Aboutus.module.scss';



function AboutUs() {
    return (
        <div className={style.wrapper}>
            {/* <div className={style.inner}>
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
            </div> */}

            <div className={style.bodyhome}>
                <img src={images.aboutus} className={style.aboutus_image} alt="aboutusimage" />
                <div className={style.aboutus_text}>
                    <div className={style.aboutus_text_1}>ABOUT US</div>
                    <p className={style.aboutus_text_2}>
                        Veggo® được sinh ra từ niềm đam mê bất tận với đồ ăn sạch Việt Nam. Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm sạch thơm
                        ngon, sánh đượm với mức giá hợp lý. Những quả cà chua của chúng tôi không chỉ đơn thuần là thức ăn quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản
                        ánh một phần nếp sống hiện đại của người Việt Nam.
                    </p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default (AboutUs);


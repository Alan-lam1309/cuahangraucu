import images from '~/assets/images';
import style from './Aboutus.module.scss';



function AboutUs() {
    return (
        <div className={style.wrapper}>
            <div className={style.bodyhome}>
                <img src={images.aboutUs} className={style.aboutus_image} alt="aboutusimage" />
                <div className={style.aboutus_text}>
                    <div className={style.aboutus_text_1}>ABOUT US</div>
                    <p className={style.aboutus_text_2}>
                        Veggo® được sinh ra từ niềm đam mê bất tận với đồ ăn sạch Việt Nam. Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm sạch thơm
                        ngon, sánh đượm với mức giá hợp lý. Những quả cà chua của chúng tôi không chỉ đơn thuần là thức ăn quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản
                        ánh một phần nếp sống hiện đại của người Việt Nam.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default (AboutUs);


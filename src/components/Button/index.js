import style from './Button.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Button({
    to,
    href,
    className,
    text = false,
    rounded = false,
    square = false,
    small = false,
    medium = false,
    large = false,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = clsx(style.wrapper, {
        [className]: className,
        [style.text]: text,
        [style.rounded]: rounded,
        [style.square]: square,
        [style.small]: small,
        [style.medium]: medium,
        [style.large]: large,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;

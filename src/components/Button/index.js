import { memo } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import style from './Button.module.scss';

function Button({
    to,
    href,
    className,
    text = false,
    rounded = false,
    square = false,
    mini = false,
    small = false,
    medium = false,
    large = false,
    lefticon,
    righticon,
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
        [style.mini]: mini,
        [style.small]: small,
        [style.medium]: medium,
        [style.large]: large,
    });

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={style.icon}>{lefticon}</span>}
            <span className={style.title}>{children}</span>
            {righticon && <span className={style.icon}>{righticon}</span>}
        </Comp>
    );
}

export default memo(Button);

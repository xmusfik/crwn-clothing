import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children,inverted, isGoogleSignIN, ...otherProps }) => (
    <button className={`${inverted? 'inverted':''} ${isGoogleSignIN ? 'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default CustomButton;
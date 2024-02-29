import React, { forwardRef } from 'react'
import ReCAPTCHA from "react-google-recaptcha"

export const MyRecaptcha = forwardRef(({onChange}, ref) => {
    return (
        <ReCAPTCHA
            sitekey = {process.env.REACT_APP_PUBLIC_RECAPTCHA}
            render="explicit"
            ref={ref}
            onChange={onChange}
        />
    )
})
import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {

    const mode = useSelector((state) => state.mode)

    return (
        <div className="Footer" style={{ 'backgroundColor': mode.color2 }}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
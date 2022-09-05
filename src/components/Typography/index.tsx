import React from 'react';

interface TypographyProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "small",
    children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}

export default Typography
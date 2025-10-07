import Image from "next/image";
import React from "react";

const Logo: React.FC = () => (
    <a href="https://www.byron-dev.com" aria-label="Byron Dev" className="inline-block">
        <Image
            src="/assets/logo_dark.png"
            alt="Logo Byron"
            width={115}
            height={26}
            priority                
        />
    </a>
);

export default Logo;
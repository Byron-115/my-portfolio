import React from "react";

interface SolidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const SolidButton: React.FC<SolidButtonProps> = ({ children, ...props }) => (
    <button
        className={"bg-[#00B3B0] text-black font-semibold rounded-full px-3 h-7 text-sm transition-colors hover:bg-lime-300 focus:outline-none cursor-pointer"}
        {...props}
    >
        {children}
    </button>
);

export default SolidButton;
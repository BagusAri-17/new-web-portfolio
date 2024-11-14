interface ButtonProps {
    link: string,
    label: string,
    position: 'left' | 'right',
    icon: JSX.Element | null;
}

export const Button: React.FC<ButtonProps> = ({ link, label, position, icon }) => {
    return (
        <>
            <a download={link.endsWith('.pdf')} href={link} className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full text-sm font-semibold">
                {position == 'left' && icon }
                {label}
                {position == 'right' && icon}
            </a>
        </>
    )
}
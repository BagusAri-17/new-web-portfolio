interface BubbleProps {
    size: number;
}

export const Bubble: React.FC<BubbleProps> = ({ size }) => {
    return (
        <>
            <div className={`bubble`} style={{ width: `${size}px`, height: `${size}px` }}></div>
        </>
    )
}
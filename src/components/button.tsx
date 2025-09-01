interface ButtonProps {
    page: string;
    direction?: 'next' | 'back';
}

export default function Button({ page, direction = 'next' }: ButtonProps) {
    return (
        <span
            className={`nextprev-btn ${direction === "back" ? "back" : ""}`}
            data-page={page}
        >
            <i className={`bx bx-chevron-${direction === "back" ? "left" : "right"}`}></i>
        </span>
    )
}
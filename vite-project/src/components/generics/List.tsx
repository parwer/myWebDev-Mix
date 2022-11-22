type ListProps = {
    items: string[];
    onClick: ((value: string) => void)
}

export const List = ({items, onClick}: ListProps) => {
    return (
        <div>
            <h2>List of item</h2>
            {items.map((item, idx) => {
                return (
                    <div key={idx} onClick={() => onClick(item)}>
                        
                    </div>
                )
            })}
        </div>
    )
}
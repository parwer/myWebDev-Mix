type nameListProps = {
    names:{
        first: string
        last: string
    }[]
}

export const PersonList = (props: nameListProps) => {

    const name = props.names.map((name, idx) => {
        return <h2 key={idx}>{name.first} {name.last}</h2>
    })

    return (
        <div>
            {name}
        </div>
    )
}


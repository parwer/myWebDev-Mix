type InputPeops = React.ComponentProps<'input'>

export const Input = (props: InputPeops) => {
    return (
        <div>
            <input {...props}/>
        </div>
    )
}
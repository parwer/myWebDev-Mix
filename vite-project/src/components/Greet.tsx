type GreetProps = {
    name: string;
    messageCount: number;
    isLogIn: boolean;
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <p>
                {props.isLogIn ? `${props.name} ${props.messageCount} Lorem ipsum dolor sit amet.`: "Welcome"}
            </p>
        </div>
    )
}
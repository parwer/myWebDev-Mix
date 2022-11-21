type StatusProps = {
    status: string
}

export const Status = (props: StatusProps) => {
    let massage:string;
    if (props.status === "loading"){
        massage = "loading..."
    }else if (props.status === "success") {
        massage = "Data fetched success"
    }else{
        massage = "Error fetching data"
    }
    return (
        <div>
            <h2>Status - {massage}</h2>
        </div>
    )
}
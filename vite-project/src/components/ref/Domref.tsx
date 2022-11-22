import { useState, useRef, useEffect } from 'react';

export const DomRef = () => {
    const [ text, setText] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} value={text}  onChange={(event) => setText(event.target.value)}/>
        </div>
    )
}
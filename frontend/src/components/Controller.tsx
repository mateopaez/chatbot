import { useState } from 'react'
import Title from "./Title";

function Controller() {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);

    // Placeholder for later
    const createBlobUrl = (data: any) => {};

    // Placeholder for later
    const handleStop = async () => {};


    return (
        <div className="h-screen overflow-y-hidden">
            <Title setMessages={setMessages}/>
            <div className="flex flex-col justify-between h-full overflow-y-scroll pb-96">
                Placeholder
            </div>
        </div>
    )
}

export default Controller;
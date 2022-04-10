import Card from "./Card"
import List from "./List"
import Panel from "./Panel"

export default function index() {

    const vocabulary = [
        {
            word: "forward",
            translate: "avanzar",
            input: "avanzar",
        }
    ]

    return (
        <div className="mx-auto container">
            <div className="flex space-x-1 justify-center mt-24">

                <Panel/>

                <Card/>
           
                <List/>
    
            </div>



        </div>
    )
}

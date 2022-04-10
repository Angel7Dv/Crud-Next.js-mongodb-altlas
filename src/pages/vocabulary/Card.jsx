import Form from "./Form";

export default function Card() {
    return (
        <div className="w-2/3">
            <div className="flex flex-col items-center justify-center 
    border border-transparent h-72 bg-slate-700 rounded-2xl
    space-y-4 py-8  
    ">

                <div className="text-5xl border-b flex-2">
                    cards
                </div>
                <div className="border-b">
                    TRANSLATE
                </div>


                <div className="flex flex-row items-end ">

                    <span>sinonimo -</span>
                    <span>sinonimo -</span>
                    <span>sinonimo </span>

                </div>


            </div>
            <div className="mt-2 flex justify-center space-x-4">
                <button>⬅</button>
                <div>

                    1/27
                </div>
                <button>➡</button>


            </div>
                <div>
                    <Form/>
                </div>
        </div>
    )
}

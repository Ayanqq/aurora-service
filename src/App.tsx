import './App.css'
import {FormBuilder} from "./components/FormBuilder.tsx";

function App() {

    return (
        <div className={'flex flex-col gap-[5px] justify-center items-center'}>
            <h1 className={'text-[34px] mt-[20px]'}>Конструктор форм</h1>
            <FormBuilder/>
        </div>
    )
}

export default App

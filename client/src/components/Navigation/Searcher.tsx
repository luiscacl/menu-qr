
import { useState, ChangeEvent } from "react";
import Backdrop from "../UI/Backdrop";
import { categories } from "../../data/categories";

const Searcher: React.FC = () => {
    const [inputVal, setInputVal] = useState<string>('');
    const [showSearcher, setShowSearcher] = useState<boolean>(false);

    const searchHanlder = (event: ChangeEvent<HTMLInputElement>) => {
        
        console.log(event.target.value)
        setInputVal(event.target.value);
        // categories
    }

    const closeHanlder = () => {
        setShowSearcher(false)
    }

    const focusInHandler = () => {
        setShowSearcher(true);
    }

    const focusOutHandler = () => {
        setShowSearcher(false);
    }
    const zIdxInputClass = showSearcher ? 'z-20' : 'z-0';

    return <div className="relative">
        <Backdrop closeHandler={closeHanlder} show={showSearcher}/>
        <input value={inputVal} onFocus={focusInHandler} onBlur={focusOutHandler} onChange={searchHanlder} placeholder="Search" type="text" id="searcher" name="searcher" autoComplete="off" className={`${zIdxInputClass} border-gray-700 pr-[35px] relative w-full border z-40 rounded-full h-[40px] px-[12px] focus:bg-gray-100 focus:outline-none`}/>
        {showSearcher && (
            <ul className="bg-white w-full max-h-[300px] absolute top-[50px] rounded-lg z-10">
                
            </ul>
        )}
    </div>

}

export default Searcher;

import { categories } from "../../data/categories";

const Categories: React.FC = () => {
    return (
        <div className="bg-white rounded-r-lg pb-[15px]">
            <div className="w-full p-[15px] pl-[50px] flex justify-between items-center">
                <h1 className="text-[23px] font-bold">Explore by Category</h1>
                <div className="mr-[25px] flex">
                    <div className="w-8 h-8 bg-cream rounded-full flex justify-center items-center cursor-pointer mr-2"><svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></div>
                    <div className="w-8 h-8 bg-cream rounded-full flex justify-center items-center cursor-pointer"><svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></div>
                </div>
            </div>
            <div className="w-full flex flex-wrap ml-[20px]">
                {categories.map(val => {
                    return <div className="w-[282px] h-[70px] bg-cream m-[10px] mt-0 rounded-lg flex justify-between items-center px-[20px] flex-wrap cursor-pointer" key={val.category}>
                        <span className="text-[18px]">{val.category}</span>
                        <span className="text-[42px] mb-[15px]">{val.emoji}</span>
                    </div>;
                })}

            </div>
        </div>
    );
}

export default Categories;
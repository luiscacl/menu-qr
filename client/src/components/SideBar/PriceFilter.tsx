

const PriceFilter: React.FC = () => {
    return (
        <div className="w-full h-fit font-sans bg-white rounded-l-lg p-[25px] mb-[20px] flex flex-col">
            <label htmlFor="searcher" className="font-bold">PRICE FILTER</label>
            <input type="range" min={0} max={3} className="mt-[10px] bg-black custom-range cursor-pointer"/>
            <div className="flex justify-between">
                <p>$50</p><p>$100</p><p>$150</p><p>$200+</p>
            </div>
            {/* <div className="relative w-[250px] mt-[10px]">
                <svg className="h-5 text-gray-900 absolute right-0 top-[6px] pr-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <input placeholder="Search Product" type="text" id="searcher" name="searcher" className="border-gray-700 w-full border rounded-lg pl-[8px] pr-[32px] py-[3px] focus:bg-gray-100 focus:outline-none"/>
            </div> */}
        </div>
    );
}
export default PriceFilter;

import { favoriteMeals } from '../../data/favoriteMeals';

const Favorites: React.FC = () => {
    return (
        <div className="w-full h-[488px] font-sans bg-white rounded-l-lg p-[25px] pb-[70px]">
            <h1 className="font-bold">FAVORITES</h1>
            <div className="flex flex-col overflow-y-scroll mt-[10px] h-full">
                {favoriteMeals.map(meal => {
                    return <div key={meal.name} className='flex mb-[10px] relative'>
                        <svg className='absolute right-0 top-0 h-4 mr-[10px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        <div className=' w-[110px] h-[60px] rounded-lg overflow-hidden mr-[10px]'>
                            <img src={meal.imageUrl} alt={meal.name} className='w-full h-full'></img>
                        </div>
                        <div>
                            <h1 className='font-bold text-[13px]'>{meal.name}</h1>
                            <p>${meal.price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}
export default Favorites;
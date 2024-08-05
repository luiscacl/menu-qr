import Categories from "../components/MealCategories/Categories";
import MealList from "../components/Meals/MealList";
import MainNavigation from "../components/Navigation/MainNavigation";
import Favorites from "../components/SideBar/Favorites";
import PriceFilter from "../components/SideBar/PriceFilter";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col relative">
            <MainNavigation/>
            <div className="w-full bg-cream flex items-start justify-between">
                <section className="w-[950px] flex flex-col pb-[15px] font-sans mr-[22px]">
                    <Categories/>
                    <MealList/>
                </section>
                <section className="bg-cream h-full w-[500px] flex flex-col sticky top-0 ">
                    <PriceFilter/>
                    <Favorites/>
                </section>
            </div>
        </div>
    );
}

export default Home;
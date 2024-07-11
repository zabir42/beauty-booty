import Banner from "./components/Banner";
import BestSelling from "./components/BestSelling";
import Dotgroup from "./components/Dotgroup";
import Header from "./components/Header";
import MegaMenu from "./components/MegaMenu";
import MonsoonSale from "./components/MonsoonSale";
import Trending from "./components/Trending";

export default function App() {
  return (
    <div>
      <Header />
      <MegaMenu />
      <div className="w-full border-solid h-[0.5px] bg-gray-200 mb-3"></div>
      <Banner />
      <Trending />
      <MonsoonSale />
      <BestSelling />
      <Dotgroup />
    </div>
  );
}

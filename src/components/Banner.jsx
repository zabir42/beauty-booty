import BannerImg from "../assets/image/bmg.jpeg";

export default function Banner() {
  return (
    <div className="w-5/6 mx-auto">
      <img src={BannerImg} alt="banner" className="w-full rounded-lg" />
    </div>
  );
}

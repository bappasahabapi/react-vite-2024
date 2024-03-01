/* eslint-disable react/prop-types */
import HeartIcon from '../../assets/heart.svg'

export default function Favourite({onShow}) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={HeartIcon} alt="heart" />
      <span onClick={onShow}>Favourite Locations</span>
    </div>
  );
}

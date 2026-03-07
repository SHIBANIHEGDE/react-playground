
import "./Tile.css";
type TileProps = {
    value:string;
    handleClick: ()=>void,
}
const Tile = ({value, handleClick}: TileProps) => {
   
   
  return (
     <button className="square" onClick={handleClick}>{value}</button>
  )
}

export default Tile;
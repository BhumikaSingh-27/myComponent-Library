import "./text.css";
import {BiSearch} from "react-icons/bi"
const Text = () => {
  return (
    <div>
      <input type="text" placeholder="enter" className="smallInput" />

{/* search bar */}
    <div className="searchBar">
        <em><BiSearch /></em>
      <input type="text" placeholder="enter" className="searchInput" />
      </div>
    </div>
  );
};

export default Text;

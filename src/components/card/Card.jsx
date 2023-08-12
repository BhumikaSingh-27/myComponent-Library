import "./card.css";
const Card = () => {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img
          id="img"
          src="https://b.zmtcdn.com/data/dish_photos/9e7/bdf4fa911a76e5ba0656f5adad9749e7.png?output-format=webp"
          alt=""
        /></div>
        <div className="textContainer">
          <h2>food</h2>
          <div className="smallFont displayFlexJust">
            <p>name</p>
            <p>price</p>
          </div>
        </div>
      </div>
  
  );
};

export default Card;

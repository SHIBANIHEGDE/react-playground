import labels from "@/common/labels";
import "./Card.css";
function Card() {
  const user = {
    name: "Shibani",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam facilis molestias nemo harum eius est placeat quis architecto voluptatem unde, saepe ipsum magni eos, dignissimos quaerat assumenda accusantium atque.",
    imageUrl:
      "https://images.unsplash.com/photo-1768933294181-82778103e501?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <div className="user-card">
      <img className="user-card__image" src={user.imageUrl} />
      <h1> {user.name} </h1>
      <p className="user-card__description">{user.description}</p>
      <button className="user-card__button">{labels.view_details}</button>
    </div>
  );
}
export default Card;

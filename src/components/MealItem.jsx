export default function MealItem({ id, meal }) {
  return (
    <li key={id} className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price ">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p className="meal-item-actions ">
          <button>Add To cart</button>
        </p>
      </article>
    </li>
  );
}

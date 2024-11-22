import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";

export default function MealItem({ id, meal }) {
  return (
    <li key={id} className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price ">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p className="meal-item-actions ">
          <Button>Add To cart</Button>
        </p>
      </article>
    </li>
  );
}

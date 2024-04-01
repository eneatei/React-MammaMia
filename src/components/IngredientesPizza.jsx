import { TbCheese, TbMushroom } from "react-icons/tb";
import { FaBacon } from "react-icons/fa";
import { PiPepper, PiLeaf } from "react-icons/pi";
import { GiTomato, GiHamShank, GiMeat, GiOlive, GiChicken } from "react-icons/gi";

const IngredientesPizza = ({ ingredients }) => {
  const renderIngredientIcon = (ingredient) => {
    switch (ingredient) {
      case 'mozzarella':
        return <TbCheese />;
      case 'bacon':
        return <FaBacon />;
      case 'pimientos':
        return <PiPepper />;
      case 'tomates':
      case 'tomates cherry':
        return <GiTomato />;
      case 'jamón':
        return <GiHamShank />;
      case 'orégano':
        return <PiLeaf />;
      case 'choricillo':
      case 'salame':
        return <GiMeat />;
      case 'aceitunas':
        return <GiOlive />;
      case 'champiñones':
        return <TbMushroom />;
      case 'pollo grillé':
        return <GiChicken />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h6>Ingredientes:</h6>
      {ingredients.map((ingredient) => (
        <div key={ingredient} style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
          {renderIngredientIcon(ingredient)}
          <span style={{ marginLeft: '5px' }}>{ingredient}</span>
        </div>
      ))}
    </div>
  );
};

export default IngredientesPizza;

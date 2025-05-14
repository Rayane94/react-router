import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="p-3">
      <h1>Catégorie : {category}</h1>
      <Button variant="primary" onClick={handleBack}>
        Retour à la page d'accueil
      </Button>
    </div>
  );
};

export default Category;

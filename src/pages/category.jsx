import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  return <h1>Catégorie : {category}</h1>;
};

export default Category;

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";
 
export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  
    // como esto no va a cambiar, no es necesario memorizar, pero lo simularemos como si hicieramos
    // una petición fetch, porque podría redibujar el componente.
    // useMemo es para memorizar valores, y useCallback es para memorizar funciones
    // const hero = getHeroById(id);

    // cuando el ID cambie entonces la función getHeroById se va a volver a disparar para obtener nuevos valores
    const hero = useMemo(()=> getHeroById(id), [id])

  
    

  const onNavigateBack = () => {

    navigate(-1) // Esto podría sacarlo de la aplicación
  }

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          // src={`/assets/heroes/${id}.jpg`}
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b> Alter ego:</b> {hero.alter_ego}
          </li>

          <li className="list-group-item">
            <b> Publisher:</b> {hero.publisher}
          </li>

          <li className="list-group-item">
            <b> First appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button onClick={onNavigateBack} className="btn btn-outline-primary">Go Back</button>
      </div>
    </div>
  );
};

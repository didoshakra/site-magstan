//Gallery.js
import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";

const Gallery = ({ images }) => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  return (
    <div className="card__item">
      {/* <div class="paper"> */}
      {images.map(image => {
        return (
          <div className="image" key={image}>
            <img src={image} alt="img" />
          </div>
        );
      })}
      {/* </div> */}
      <style jsx>{`
        .card__item {
          display: flex;
          flex-wrap: wrap;
          //justify-content: stretch; /* элементы имеют "авто-размер", чтобы соответствовать   контейнеру*/
          justify-content: space-between; /*Первый элемент вначале, последний в конце */
          //margin-bottom: 50px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .card__item img:hover {
          transform: scale(1.1);
          transition: transform 0.4s ease-in;
          // transform: scale(0.5); // пропорциональное уменьшение элемента наполовину
          cursor: pointer; //рука
        }
        .image {
          padding: 20px;
          margin: 0 0 20px;
          width: calc((100% - 40px) / 3); //Щирина при 3-х колонках
          border-radius: 15px;
          //background: rgb(223, 222, 222);
          //box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
          //box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
          box-shadow: ${theme.colors.boxShadowCard};
          background: ${theme.colors.backgroundCard};
        }
        //iPad
        @media (max-width: 960px) {
          .image {
            width: calc((100% - 40px) / 2); //Щирина при 2-х колонках
            //width: 49%;
            padding: 10px 20px;
          }
        }
        //Mobi
        @media (max-width: 600px) {
          .image {
            width: auto;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;

import React from "react";
import { Link } from "react-router-dom";

export default function Beer(props) {
  const imageSize = {
    height: 200,
    width: 100
  };

  let showButton = (
    <button
      id="btn-add-favourites"
      aria-label="Add to Favourites"
      onClick={() => props.addBeerToFavourite(props.beer)}
      type="button"
      className="btn btn-outline-primary"
    >
      Add to Favourites
    </button>
  );

  if (props.isFavourites) {
    showButton = (
      <button
        id="btn-remove-favourites"
        aria-label="Remove from Favourites"
        onClick={() => props.removeBeerFromFavourite(props.beer)}
        type="button"
        className="btn btn-outline-danger"
      >
        Remove from Favourites
      </button>
    );
  }
  return (
    <React.Fragment>
      <table className="table">
        <tbody>
          <tr>
            <td style={{ width: 150, height: 240 }}>
              <img
                src={props.beer.image_url}
                className="img-thubnail"
                style={imageSize}
                alt={props.beer.name}
              />
            </td>
            <td style={{ textAlign: "left" }}>
              <div>
                <span style={{ fontSize: 24, fontWeight: "bold" }}>
                  {props.beer.name}
                </span>
                <span style={{ float: "right" }}>{showButton}</span>
              </div>
              <div
                style={{
                  fontWeight: 500,
                  paddingBottom: 10
                }}
              >
                <i>{props.beer.tagline}</i>
              </div>
              <div>{props.beer.description}</div>
              <div
                style={{ fontWeight: "bolder", marginTop: 20, fontSize: 10 }}
              >
                Alcohol by Volume: {props.beer.abv} %
              </div>
              <div style={{ marginTop: 10 }}>
                <Link
                  id="link-more-info"
                  aria-label="More Information"
                  to={{
                    pathname: "/moreInfo",
                    state: { beer: props.beer }
                  }}
                >
                  More Information
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

import React from "react";
import { BackToHome } from "../components";

export default function MoreInformation(props) {
  const imageSize = {
    height: 200,
    width: 100
  };

  const attributeRow = {
    width: "auto",
    height: "auto",
    fontSize: 20,
    fontWeight: "bold"
  };

  const contentRow = {
    textAlign: "left",
    fontSize: 20
  };

  return (
    <React.Fragment>
      <h3 style={{ marginTop: 20, fontWeight: "bold" }}>
        Details about this Beer
      </h3>
      <table className="table">
        <tbody>
          <tr>
            <td style={attributeRow}>Bottle Design</td>
            <td style={contentRow}>
              <img
                src={props.beerInfo.image_url}
                className="img-thubnail"
                style={imageSize}
                alt={props.beerInfo.name}
              />
            </td>
          </tr>
          <tr>
            <td style={attributeRow}>Name</td>
            <td style={contentRow}>{props.beerInfo.name}</td>
          </tr>
          <tr>
            <td style={attributeRow}>Tagline</td>
            <td style={contentRow}>{props.beerInfo.tagline}</td>
          </tr>
          <tr>
            <td style={attributeRow}>Description</td>
            <td style={contentRow}>{props.beerInfo.description}</td>
          </tr>
          <tr>
            <td style={attributeRow}>Contributor</td>
            <td style={contentRow}>{props.beerInfo.contributed_by}</td>
          </tr>
          <tr>
            <td style={attributeRow}>Food Pairing</td>
            <td style={contentRow}>
              <ul>
                {props.beerInfo.food_pairing.map((foodItem, index) => (
                  <li key={index}>{foodItem}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td style={attributeRow}>Brewers Tip</td>
            <td style={contentRow}>{props.beerInfo.brewers_tips}</td>
          </tr>
        </tbody>
      </table>
      <BackToHome />
    </React.Fragment>
  );
}

import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import "../asset/style/gameXucXac/gameXucXac.css";

export default class GameXucXac extends Component {
  render() {
    return (
      <div className="game__wrapper">
        <div className="mt-5">
          <h2 className="text-center display-4 m-4">Game Xúc Xắc</h2>
          <XucXac />
          <KetQuaTroChoi />
        </div>
      </div>
    );
  }
}

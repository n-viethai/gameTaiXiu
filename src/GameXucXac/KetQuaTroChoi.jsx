import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    //   cách 1
    let { soBanThang, soLuotChoi, banChon } = this.props;

    //   cách 2
    // let {soBanThang,soLuotChoi,banChon} = this.props.GameXucXacReducer;

    return (
      <div className="container text-center">
        <div className="display-4 mt-3">
          Bạn chọn :{" "}
          <span className="text-warning">{banChon ? "Tài" : "Xỉu"}</span>
        </div>
        <div className="display-4 mt-3">
          Số bàn thắng : <span className="text-success">{soBanThang}</span>
        </div>
        <div className="display-4 mt-3">
          Tổng số lượt chơi : <span className="text-primary">{soLuotChoi}</span>
        </div>
        <button
          className="btn btn-success fs-1 mt-3"
          onClick={() => {
            const action = {
              type: "PLAY_GAME",
            };
            this.props.dispatch(action);
          }}
        >
          Play Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    // cách 1
    banChon: rootReducer.GameXucXacReducer.banChon,
    soBanThang: rootReducer.GameXucXacReducer.SoBanThang,
    soLuotChoi: rootReducer.GameXucXacReducer.soLuotChoi,

    // cách 2
    // GameXucXacReducer:rootReducer.GameXucXacReducer,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);

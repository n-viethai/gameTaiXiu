import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderKetQua = () => {
    let { mangXucXac } = this.props;
    console.log(mangXucXac);
    let tongDiem = mangXucXac.reduce((tong, item, index) => {
      return (tong += item.diem);
    }, 0);
    let ketQua = tongDiem > 11 ? "Tài" : "Xỉu";
    return `${tongDiem} - ${ketQua}`;
  };

  render() {
    let { mangXucXac } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 text-center">
            <button
              className="btn btn-danger fs-1 p-5"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: true,
                };
                this.props.dispatch(action);
              }}
            >
              TÀI
            </button>
          </div>
          <div className="col-6 text-center">
            <img
              className="mx-2"
              src={mangXucXac[0].hinhAnh}
              style={{ width: "50px" }}
              alt="..."
            />
            <img
              className="mx-2"
              src={mangXucXac[1].hinhAnh}
              style={{ width: "50px" }}
              alt="..."
            />
            <img
              className="mx-2"
              src={mangXucXac[2].hinhAnh}
              style={{ width: "50px" }}
              alt="..."
            />
            <div className="display-4 mt-3">{this.renderKetQua()}</div>
          </div>
          <div className="col-3 text-center">
            <button
              className="btn btn-dark fs-1 p-5"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: false,
                };
                this.props.dispatch(action);
              }}
            >
              XỈU
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.GameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStatetoProps)(XucXac);

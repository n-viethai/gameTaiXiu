const stateDefault = {
  soLuotChoi: 0,
  SoBanThang: 0,
  banChon: true,
  mangXucXac: [
    { hinhAnh: "./img/1.png", diem: 1 },
    { hinhAnh: "./img/2.png", diem: 2 },
    { hinhAnh: "./img/3.png", diem: 3 },
  ],
};

export const GameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }

    case "PLAY_GAME": {
      // tạo ra xúc xắc ngẫu nhiên từ random
      let mangXucXacNgauNhien = [];
      let tongDiem = 0;
      for (let i = 0; i < 3; i++) {
        // tạo số ngẫu nhiên
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // từ số ngẫu nhiên tạo ra 1 project xúc xắc ngẫu nhiên
        let xxnn = {
          hinhAnh: `./img/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };
        mangXucXacNgauNhien.push(xxnn);
        // tính tổng điểm
        tongDiem += soNgauNhien;
      }
      state.mangXucXac = mangXucXacNgauNhien;

      //   tính tổng điểm theo cách khác
      //   let tongDiem = mangXucXacNgauNhien.reduce((tong, item, index) => {
      //     return (tong += item.diem);
      //   }, 0);

      //   xử lý thắng cuộc
      if (tongDiem > 11) {
        if (state.banChon) {
          state.SoBanThang += 1;
        }
      } else {
        if (!state.banChon) {
          state.SoBanThang += 1;
        }
      }
      state.soLuotChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

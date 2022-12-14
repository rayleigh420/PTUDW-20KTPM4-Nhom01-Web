"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      { province: "AG", provinceName: "An Giang" },
      { province: "BV", provinceName: "Bà Rịa-Vũng Tàu" },
      { province: "BL", provinceName: "Bạc Liêu" },
      { province: "BK", provinceName: "Bắc Kạn" },
      { province: "BG", provinceName: "Bắc Giang" },
      { province: "BN", provinceName: "Bắc Ninh" },
      { province: "BT", provinceName: "Bến Tre" },
      { province: "BD", provinceName: "Bình Dương" },
      { province: "BĐ", provinceName: "Bình Định" },
      { province: "BP", provinceName: "Bình Phước" },
      { province: "BTh", provinceName: "Bình Thuận" },
      { province: "CM", provinceName: "Cà Mau" },
      { province: "CB", provinceName: "Cao Bằng" },
      { province: "CT", provinceName: "Cần Thơ" },
      { province: "ĐNa", provinceName: "Đà Nẵng" },
      { province: "ĐL", provinceName: "Đắk Lắk" },
      { province: "ĐNo", provinceName: "Đắk Nông" },
      { province: "ĐB", provinceName: "Điện Biên" },
      { province: "ĐN", provinceName: "Đồng Nai" },
      { province: "ĐT", provinceName: "Đồng Tháp" },
      { province: "GL", provinceName: "Gia Lai" },
      { province: "HG", provinceName: "Hà Giang" },
      { province: "HNa", provinceName: "Hà Nam" },
      { province: "HN", provinceName: "Hà Nội" },
      { province: "HT", provinceName: "Hà Tĩnh" },
      { province: "HD", provinceName: "Hải Dương" },
      { province: "HP", provinceName: "Hải Phòng" },
      { province: "HGi", provinceName: "Hậu Giang" },
      { province: "HB", provinceName: "Hòa Bình" },
      { province: "SG", provinceName: "Thành phố Hồ Chí Minh" },
      { province: "HY", provinceName: "Hưng Yên" },
      { province: "KH", provinceName: "Khánh Hoà" },
      { province: "KG", provinceName: "Kiên Giang" },
      { province: "KT", provinceName: "Kon Tum" },
      { province: "LC", provinceName: "Lai Châu" },
      { province: "LS", provinceName: "Lạng Sơn" },
      { province: "LCa", provinceName: "Lào Cai" },
      { province: "LĐ", provinceName: "Lâm Đồng" },
      { province: "LA", provinceName: "Long An" },
      { province: "NĐ", provinceName: "Nam Định" },
      { province: "NA", provinceName: "Nghệ An" },
      { province: "NB", provinceName: "Ninh Bình" },
      { province: "NT", provinceName: "Ninh Thuận" },
      { province: "PT", provinceName: "Phú Thọ" },
      { province: "PY", provinceName: "Phú Yên" },
      { province: "QB", provinceName: "Quảng Bình" },
      { province: "QNa", provinceName: "Quảng Nam" },
      { province: "QNg", provinceName: "Quảng Ngãi" },
      { province: "QN", provinceName: "Quảng Ninh" },
      { province: "QT", provinceName: "Quảng Trị" },
      { province: "ST", provinceName: "Sóc Trăng" },
      { province: "SL", provinceName: "Sơn La" },
      { province: "TN", provinceName: "Tây Ninh" },
      { province: "TB", provinceName: "Thái Bình" },
      { province: "TNg", provinceName: "Thái Nguyên" },
      { province: "TH", provinceName: "Thanh Hóa" },
      { province: "TTH", provinceName: "Thừa Thiên-Huế" },
      { province: "TG", provinceName: "Tiền Giang" },
      { province: "TV", provinceName: "Trà Vinh" },
      { province: "TQ", provinceName: "Tuyên Quang" },
      { province: "VL", provinceName: "Vĩnh Long" },
      { province: "VP", provinceName: "Vĩnh Phúc" },
      { province: "YB", provinceName: "Yên Bái" },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });
    return queryInterface.bulkInsert("Provinces", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Provinces", null, {});
  },
};

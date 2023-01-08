"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      { province: "SG", places: "Trạm Xăng Dầu Huệ Thiên 3" }, //SG - BTh
      { province: "SG", places: "Cầu Vượt Sóng Thần" },
      { province: "SG", places: "Chợ Tam Bình" },
      { province: "SG", places: "Ngã 4 Gò Dưa" },
      { province: "SG", places: "Cầu vượt Linh Xuân" },
      { province: "SG", places: "Khu Chế Xuất Linh Trung" },
      { province: "SG", places: "Đại học Nông Lâm" },
      { province: "SG", places: "Cây Xăng Hiệp Phú 2" },
      { province: "SG", places: "Ngã 3 Tân Vạn" },
      { province: "SG", places: "Cổng 11 - Vòng Xoay tránh Biên Hòa" },
      { province: "BTh", places: "Ngã ba 46 Bình Thuận" },
      { province: "BTh", places: "Ma Lâm" },
      { province: "BTh", places: "Lương Sơn" },
      { province: "BTh", places: "Bến xe Tuy Phong" },
      { province: "BTh", places: "Chí Công" },
      { province: "BTh", places: "Nội thành Phan Rí" },
      { province: "BTh", places: "Chợ Lầu" },
      { province: "BTh", places: "Cổ Thạch" },
      { province: "BTh", places: "Phước Thể" },
      { province: "NT", places: "Ngã 3 Phú Quý" },
      { province: "NT", places: "Trạm dừng chân Hạnh Vy" },
      { province: "NT", places: "Ngã 5 Phan Rang" },
      { province: "NT", places: "Chợ Phước Mỹ" },
      { province: "NT", places: "Ngã 4 Tháp Chàm" },
      { province: "NT", places: "Thôn Đắc Nhơn" },
      { province: "NT", places: "Chợ Lương Cang" },
      { province: "NT", places: "Nha Hố" },
      { province: "NT", places: "Đồng Mé" },
      { province: "NT", places: "UBND xã Mỹ Sơn" },
      { province: "NT", places: "Bến Xe Ninh Sơn" },
      { province: "NT", places: "Chợ Quảng Sơn" },
      { province: "NT", places: "Nhà thờ La Vang" },
      { province: "NT", places: "Trạm biến áp Ninh Sơn" },
      { province: "NT", places: "Cây xăng Phú Quỳnh*" },
      { province: "NT", places: "Trà Giang" },
      { province: "ĐL", places: "Ngã ba Duy Hoà" },
      { province: "ĐL", places: "Buôn Ma Thuột - Quốc Lộ 14" },
      { province: "ĐL", places: "Bến xe phía nam Buôn Mê Thuột" },
      { province: "ĐL", places: "Cư Kuin" },
      { province: "ĐL", places: "VP Hòa Đông-Tiến Oanh" },
      { province: "ĐL", places: "VP Hòa Thắng-Tiến Oanh" },
      { province: "ĐL", places: "VP Đạt Lý-Tiến Oanh" },
      { province: "ĐL", places: "TP Buôn Ma Thuột" },
      { province: "GL", places: "Ngã 3 Hàm Rồng" },
      { province: "GL", places: "Ngã 3 La Sơn" },
      { province: "GL", places: "Ngã 4 Lâm Nghiệp" },
      { province: "GL", places: "Đăk Sơ Mai" },
      { province: "GL", places: "Nội thành Pleiku" },
      { province: "GL", places: "Chợ Trà Bá" },
      { province: "GL", places: "Chư Păh" },
      { province: "GL", places: "ngã 3 Yaly" },
      { province: "GL", places: "Nội huyện An Khê" },
      { province: "GL", places: "Mang Yang" },
      { province: "GL", places: "Ngã 3 Phú Mỹ" },
      { province: "GL", places: "Bến xe Đức Long Gia Lai" },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW() ");
      item.updatedAt = Sequelize.literal("NOW() ");
    });
    return queryInterface.bulkInsert("Places", items);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Places", null, {});
  },
};

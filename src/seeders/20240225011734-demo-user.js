"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "jobinfo",
      [
        {
          id: "5",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "6",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "7",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "8",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "9",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "10",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "11",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "12",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "13",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "14",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },
        {
          id: "15",
          title: "Developer",
          address: "Quang Nam",
          description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          salary: "Trên 10 triệu",
          sourcePicture: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
        },

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

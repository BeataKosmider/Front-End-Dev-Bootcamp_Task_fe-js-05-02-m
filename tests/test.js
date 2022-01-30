const fs = require("fs");

describe("W folderze js", () => {
  it("powinien byc index.js", async () => {
    const hasFile = fs.readdirSync(`${__dirname}/../js`).includes("index.js");
    expect(hasFile).toEqual(true);
  });
  it("powinien byc index-async.js", async () => {
    const hasFile = fs
      .readdirSync(`${__dirname}/../js`)
      .includes("index-async.js");
    expect(hasFile).toEqual(true);
  });
  it("powinien byc index-defer.js", async () => {
    const hasFile = fs
      .readdirSync(`${__dirname}/../js`)
      .includes("index-defer.js");
    expect(hasFile).toEqual(true);
  });
});

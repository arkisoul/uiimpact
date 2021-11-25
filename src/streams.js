const fs = require("fs");

const fileStream = fs.createWriteStream("bigfile.txt");

for(let i = 0; i < 1000000; i++) {
    fileStream.write(
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium esse, vel velit fugiat suscipit ea sed, assumenda sint id provident fuga nihil? Accusantium cupiditate tempora voluptatibus blanditiis aperiam debitis perferendis."
    );
}

for (let i = 0; i < 1000000; i++) {
  fileStream.write(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium esse, vel velit fugiat suscipit ea sed, assumenda sint id provident fuga nihil? Accusantium cupiditate tempora voluptatibus blanditiis aperiam debitis perferendis."
  );
}

fileStream.end();
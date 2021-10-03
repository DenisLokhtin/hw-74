const fs = require("fs");

module.exports = {
  save(req, date) {
    fs.writeFile(`./messages/${date}.txt`, JSON.stringify(req), (err => {
      if (err) {
        console.log(err)
      } else {
        console.log('file was saved')
      }
    }));
  },
  read(names) {
    names.forEach(a => {
      fs.readdir(`./messages/${a}.txt`, (err, files) => {
        if (err) {
          console.log(err)
        } else {
          res.send(files)
          console.log('file was read')
        }
      })
    })
  },
};
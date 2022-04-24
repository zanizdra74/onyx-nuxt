const express = require('express');
//const fileUpload = require('express-fileupload');
const multer = require('multer')
const cors = require('cors')

const app = express();


const upload = multer({
  dest: './upload'
})

app.use(cors)


module.exports.uploadImage = async (req, res) => {
  console.log('uploadImage', req.body.description, req.file)
  if (!req.file) {
    return res.status(500).send({ msg: "file is not found" })
  }
  // accessing the file
  const myFile = req.file;
// return res.send({name: myFile.name, path: `/${myFile.name}`});

  //  mv() method places the file inside public directory
  console.log ('file name ==', myFile.originalname)
  console.log ('dir name ==', __dirname)
  return res.send({name: myFile.name, path: `/${myFile.originalname}`});

/*
  myFile.mv(`${__dirname}/public/${myFile.originalname}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    return res.send({name: myFile.name, path: `/${myFile.name}`});
  });

 */
}

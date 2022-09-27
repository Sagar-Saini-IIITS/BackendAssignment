const express = require('express');
const router = express.Router();
const UserAddress = require('../models/Details');
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const download = require('image-downloader');
const resizer = require('node-image-resizer');
const jsonpatch= require ('fast-json-patch');
const {applyOperation} = require ('fast-json-patch');


// ROUTE 1
// adding address in database

router.post('/add', fetchuser, [
  body('address', 'Enter a address of length > 2').isLength({ min: 3 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { address } = req.body;
    const task = new UserAddress({ username: req.user.id, address });
    const savedTask = await task.save(); // saving address of user
    res.json(savedTask);

  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occured while adding address");
  }
})





//ROUTE 2
// URL TO ReSIZED IMAGE

router.post('/urltoimage', fetchuser, async (req, res) => {
  // thumbnail path and resize image specification detail
  const setup = {
    all: {
      path: 'C:/btask/backend/thumbnails/',
      quality: 100
    },
    versions: [{
      width: 50,
      height: 50
    }]
  };
  const { uri } = req.body; // url of image
  const options = {
    url: uri,
    dest: 'C:/btask/backend/image/'  // path where image downloaded
  };

  try {
    const file = await download.image(options); // downloading image to image folder
    const thumbs = await resizer(file.filename, setup); // resizing image and saving it to the thumbnail folder
    res.send(file.filename); // sending file as response
  }
  catch (error) {
    res.status(500).send("Some error occured while resizing image");
  }

})



// ROUTE 3
//  Applying the json patch to the json object, and return the resulting json object.

router.post('/patch',fetchuser, async (req, res) => {
  
  let {document,patch} =req.body;
  try {
document = jsonpatch.applyPatch(document, patch).newDocument;
 res.json(document);
  } catch (error) {
    console.log(error);
    res.status(500).send("Some error occured");
  }
})

module.exports = router
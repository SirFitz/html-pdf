const express = require('express');
const cors = require('cors');
const pdf = require('html-pdf');
const app = express();
const port = 3007;

//Listens on const port for incoming connections
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

app.use(express.text())
//Enable Cross Origin Requests
app.use(cors());

app.post('/convert', async(req, res, next) => {
    let path = "/tmp/pdf_" + Math.random().toString(36).substr(2, 9) + ".pdf";

    var options = { format: 'Letter' };

    var file = await pdf.create(req.body, options).toFile(path, function(err, resp) {
        if (err) return res.json({state: 'error', reason: err.toString(), note: "Please Ensure HTML Contains no Scripts to reduce possibility of errors."});

        return res.sendFile(path);
    });

});


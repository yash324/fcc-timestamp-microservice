
var express = require('express');
var app = express();

app.use((req,res,next)=>{
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/api/timestamp/:date_string", (req, res, next) => {
  const { date_string } = req.params;
  if(date_string === "") req.date = new Date();
  else req.date = new Date(date_string);
  next();
}, (req, res) => {
  console.log(req.date);
  if(req.date instanceof Date && !isNaN(req.date))
    return res.json({"unix": req.date.getTime(), "utc": req.date.toUTCString() });
  return res.json({"error" : "Invalid Date" });
  
});

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;

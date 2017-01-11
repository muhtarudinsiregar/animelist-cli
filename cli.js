#!/usr/bin/env node

'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = "https://myanimelist.net/topanime.php";

axios.get(baseUrl).then(response => {
  var lists = [];
  var newData = [];
  var $ = cheerio.load(response.data);
  var root = $('tr.ranking-list');

  var data = root[0].children;
  // cleaning data crawling just for td
  newData = data.filter(function (res) {
    return res.name === 'td';
  }).filter(function(res, index){
    return res.type === 'tag'
  });

  console.log(newData);
}).catch(error => {
  console.log(error);
});

var express = require('express');
var router = express.Router();
var hydrate = require('../hydrate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/webcomponents/', function(req, res){
  console.log(req.body);
  
  hydrate.renderToString(req.body.webcomponent, {
      prettyHtml: false,
      runtimeLogging: true,
      maxHydrateCount: 50
    }
    ).then((hydrateResults) => {
      res.send(hydrateResults.html);
    });
})

module.exports = router;

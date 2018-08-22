const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    const perPage = 1;
    let page = req.query.page || 1;
    let skip = (page -1) * perPage;
    db.Address
      .find(
        {}
      )
      .skip(skip)
      .limit(perPage)
      .then(dbModel =>  {
        // callfindMethod(limitVar, skipVar);
        console.log(req.query);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Address
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res){
    db.Address
      .remove({})
      .then(dbModel => res.json(dbModel) )
      .catch(err => res.status(422).json(err) );

  },
  find: function(req, res){
    db.Address
      .find(req.query)
      .skip(skipVar)
      .limit(limitVar)
      .then(dbModel =>  {
        // callfindMethod(limitVar, skipVar);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};

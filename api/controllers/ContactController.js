module.exports = {
  email: function (req, res) {
    sails.hooks.email.send(
      "email",
      req.body,
      {
        to: sails.config.email.contactEmail,
        subject: "Contact from ACS"
      },
      function(err) {
        if (err) {
          sails.log.error(err);
        }

        res.json({'status':'OK'});}
    )
  }
};

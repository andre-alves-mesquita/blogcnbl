module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("site/index");
  });

  app.get("/como-comprar", (req, res) => {
    res.render("exemple");
  });

  app.get("/nossa-empresa", (req, res) => {
    res.render("index");
  });

  app.get("/o-cbd", (req, res) => {
    res.render("index");
  });

  app.get("/depoimentos", (req, res) => {
    res.render("index");
  });

  app.get("/patrocinios", (req, res) => {
    res.render("index");
  });

  app.get("/blog", (req, res) => {
    res.render("index");
  });

  app.get("/area-medica", (req, res) => {
    res.render("sistema/exemple");
  });
};

const { response, request } = require("express");

const getUsers = (req = request, res = response) => {
const query = req.query
  res.json({ key: "Api GET - controller",query });
};

const setUser = (req, res = response) => {
  const body = req.body;

  res.json({ key: "Api POST - controller", body });
};
const updateUser = (req, res = response) => {
  const id = req.params.id;

  res.json({ key: "Api PUT - controller",
    id });
};
const deleteUser = (req, res = response) => {
  res.json({ key: "Api DELETE - controller" });
};

module.exports = {
  getUsers,
  setUser,
  updateUser,
  deleteUser,
};

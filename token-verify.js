const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJwdWJsaWMiLCJpYXQiOjE3MDEwOTk2ODR9.JonfuxrKntzs-7_PfppHecK2R0byraZSPi6-ShOKrQ4';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);

const bcrypt = require('bcrypt');
async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$Bx543CKYF/Y9twySRjgFHO8Ydf6SpKTeNlH/aDoLaoQ3jyvWWi1yO';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}
verifyPassword();

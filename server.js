const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  const x= []
  res.send({
    token: 'test123'
  });
});
app.listen(8082, () => console.log('API is running on http://localhost:8082/login'));

/*git commit */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

const indexRoute = require('./routes/indexRoute');
const mssvRoute = require('./routes/mssvRoute');
const messageRoute = require('./routes/messageRoute');

app.use('/', indexRoute);
app.use('/MSSV', mssvRoute);
app.use('/message', messageRoute);
function logCode() {
  console.log("Cài đặt gói bằng lệnh sau: 'npm install express body-parser'")
  console.log("GET Dùng URL:");
  console.log("http://localhost:5000/");
  console.log("http://localhost:5000/19110142");
  
  console.log("Lệnh POST Dùng Terminal:");
  console.log('curl -X POST -H "Content-Type: application/json" -d \'{"id":"20110356","name":"Phan Tan Cuong"}\' http://localhost:5000/MSSV/20110356');
  console.log('curl -X POST -H "Content-Type: application/json" -d \'{"id":"20110381","name":"Nguyen Thi Tuyet Mai"}\' http://localhost:5000/MSSV/20110381');
  
  console.log("Message Sử dụng URL sau:");
  console.log("http://localhost:5000/message/19110142");
  console.log("http://localhost:5000/message");
}

// Đưa đoạn mã vào hàm log
logCode();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

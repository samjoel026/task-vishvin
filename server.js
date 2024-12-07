const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect.js')
const app = express();
const port = 5000 || process.env.PORT;
const employeeRoutes = require('./routes/Employee.routes.js');


app.use(cors());
app.use(express.json());


app.use('/api/employees', employeeRoutes);

app.use('*', (req, res, next) => {
  res.status(404).json({ status: "Failed", message: "Page Not Found" });
})

app.use((err, req, res, next) => {
  res.status(err.statusCode).json({ status: "Failed", message: err.message });
})


connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
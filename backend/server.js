const app = require('./app');

const PORT = process.env.PORT || 4000;

const router = require('./routes/index')
app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
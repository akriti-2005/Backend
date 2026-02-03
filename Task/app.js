let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

// show register form
app.get('/register', (req, res) => {
    res.render('index', { error: null });
});

// handle submit
app.post('/submit', (req, res) => {
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        res.render('index', { error: "Enter correct password" });
    } else {
        res.send("User registered successfully");
    }
});

app.listen(3000, () => {
    console.log("app is running on port 3000");
});

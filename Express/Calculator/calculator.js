const calculator = require(`express`)
const bodyParser = require(`body-parser`)

const app = calculator();
app.use(bodyParser.urlencoded({extended: true}));

app.get(`/index.html`, function (request, response) {
    response.sendFile(__dirname + `/index.html`);
});


app.get(`/bmicalc`, function (request, response) {
    response.sendFile(__dirname + `/bmicalc.html`);
});

app.post(`/index.html`, function (req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;
    res.send(result.toString());
})

app.post(`/bmicalc`, function (req, res) {
    var num1 = parseFloat(req.body.n1);
    var num2 = parseFloat(req.body.n2);

    var result = num1 / (num2 * num2);
    res.send(result.toString());
})

app.listen(3000, function () {
    console.log(`Server has started on port 3000`);
});
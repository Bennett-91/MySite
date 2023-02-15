const express = require(`express`);

const app = express();

app.get(`/`, function (request, response) {
    console.log(request);
    response.send(`Hello`)
});

app.get(`/contact`, function (request, response) {
    response.send(`Contact me at Dummy@hotmail.com`)
});

app.get(`/about`, function (request, response) {
    response.send(`I'm Kyle, a newbie developer who loves games`)
});

app.get(`/hobbies`, function (request, response) {
    response.send(`Games, other things too`)
});

app.listen(3000, function () {
    console.log(`Server has started on port 3000`);
});
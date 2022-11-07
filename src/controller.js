
const utils = require("./utlities");

module.exports = (req, res) => {

    const incoming = new URL(req.url, "http://localhost:3003");

    const endpoint = incoming.pathname;

    // console.log(endpoint);

    const regex = /^\/(html|css|img|js)\/\w+\.(html|js|css|png|jpe?g|gif|tiff|bmp)$/;

    const rx = new RegExp("^\\/(html|css|img|js)\\/\\w+\\.(html|js|css|png|jpe?g|gif|tiff|bmp)$")

    const match = endpoint.match(rx);
    if(match) {
        utils.sendFile(res, "public" + match[0]);
        return;
    }

    console.log(match);

    // utils.sendText(res, "Hilsen fra serveren");
    utils.sendJson(res, { "message": "Okay...."});

    // res.write("Hello Dolly");
    // res.end();
}
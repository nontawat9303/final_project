let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mysql = require("mysql");
const { result } = require("lodash");
const { error } = require("console");
const { system } = require("nodemon/lib/config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, X-Requested-With, Content-type, Authorization, Token-Type, User-Info, x-access-token, c-access-token"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/", (req, res) => {
    return res.send({
        error: false,
        mesage: "well come to DB",
    });
});

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lalabo",
});

//Product Route START
//Product Route START
//Product Route START
app.get("/get_product_lists", (req, res) => {
    try {
        con.query("SELECT * FROM product", (error, results, fields) => {
            if (error) throw new Error(error);

            return res
                .status(200)
                .send({ status: 200, message: "success", data: results });
        });
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message });
    }
});

app.get("/get_product_lists/:id", (req, res) => {
    const productId = req.params.id;

    try {
        con.query(
            `SELECT * FROM product where id = ${productId}`,
            (error, results, fields) => {
                if (error) throw new Error(error);

                return res
                    .status(200)
                    .send({ status: 200, message: "success", data: results });
            }
        );
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message });
    }
});

//Product Route END
//Product Route END
//Product Route END

//Users Route START
//Users Route START
//Users Route START

app.post("/add_customer", (req, res) => {
    const customer = req.body.customer;
    const nameCustumber = req.body.nameCustumber;
    const name = req.body.name;
    const tambon = req.body.tambon;
    const aumpur = req.body.aumpur;
    const phone = req.body.phone;
    const zipcode = req.body.zipcode;

    try {
        con.query(
            "INSERT INTO customer(customer, nameCustumber, name, tambon, aumpur, phone, zipcode) VALUES(?,?,?,?,?,?,?)",
            [customer, nameCustumber, name, tambon, aumpur, phone, zipcode],
            (error, result, fields) => {
                if (error) throw error;

                return res.status(200).send({
                    status: 200,
                    message: "success",
                    data: result,
                });
            }
        );
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message });
    }
});

//Users Route END
//Users Route END
//Users Route END

//get
app.get("/openbill", (req, res) => {
    con.query("SELECT * FROM open_bill", (error, results, fields) => {
        if (error) throw error;

        let message = "";
        if (results === undefined || result.length == 0) {
            message = "emply";
        } else {
            message = "successfully";
        }
        return res.send({ error: false, data: results, message: message });
    });
});

app.get("/openbill/:id", (req, res) => {
    let id = req.body.id;
    con.query(
        "SELECT * FROM open_bill WHERE id = ?",
        [id],
        (error, results, fields) => {
            console.log(results);
            if (error) throw error;

            let message = "";
            if (results === undefined || result.length == 0) {
                message = "emply";
            } else {
                message = "successfully";
            }

            return res.send({ error: false, data: results, message: message });
        }
    );
});

app.get("/setItem", (req, res) => {
    con.query("SELECT * FROM set_item", (error, results, fields) => {
        if (error) throw error;

        let message = "";
        if (results === undefined || result.length == 0) {
            message = "emply";
        } else {
            message = "successfully";
        }
        return res.send({ error: false, data: results, message: message });
    });
});

app.get("/setBank", (req, res) => {
    con.query("SELECT * FROM bank_account", (error, results, fields) => {
        if (error) throw error;

        let message = "";
        if (results === undefined || result.length == 0) {
            message = "emply";
        } else {
            message = "successfully";
        }
        return res.send({ error: false, data: results, message: message });
    });
});

app.get("/transfer", (req, res) => {
    con.query("SELECT * FROM transfer", (error, results, fields) => {
        if (error) throw error;

        let message = "";
        if (results === undefined || result.length == 0) {
            message = "emply";
        } else {
            message = "successfully";
        }
        return res.send({ error: false, data: results, message: message });
    });
});

//create
app.post("/openbill", (req, res) => {
    let customerId = req.body.customerId;
    let codeProduct = req.body.codeProduct;
    let amount = req.body.amount;
    let price = req.body.price;
    let comment = req.body.comment;

    if (!codeProduct || !amount || !price) {
        return res.status(400).send({ error: true, mesage: "dont success" });
    } else {
        con.query(
            "INSERT INTO open_bill(  codeProduct , amount , price , comment ) VALUES(?,?,?,?)",
            [codeProduct, amount, price, comment],
            (error, result, fields) => {
                if (error) throw error;
                return res.send({
                    error: false,
                    data: result,
                    message: "success!!",
                });
            }
        );
    }
});

app.post("/address", (req, res) => {
    let name = req.body.name;
    let tambon = req.body.subdistrict;
    let amphur = req.body.district;
    let province = req.body.province;
    let zipCod = req.body.zipCod;
    let phone = req.body.phone;

    if (!name || !tambon || !amphur || !province || !zipCod || !phone) {
        return res.status(400).send({ error: true, mesage: "dont success" });
    } else {
        con.query(
            "INSERT INTO address(  name , tambon , amphur , province , zipCod , phone) VALUES(?,?,?,?,?,?)",
            [name, tambon, amphur, province, zipCod, phone],
            (error, result, fields) => {
                if (error) throw error;
                return res.send({
                    error: false,
                    data: result,
                    message: "success!!",
                });
            }
        );
    }
});

//update

app.put("/transfer", (req, res) => {
    let id = 1;
    let bank = req.body.bank;
    let createdate = req.body.createdate;
    let payAmount = req.body.payAmount;
    let paySlip = req.body.paySlip;

    if (!id || !bank || !createdate || !payAmount || !paySlip) {
        return res.status(400).send({ error: true, mesage: "dont success" });
    } else {
        con.query(
            "UPDATE transfer SET bank = ? , createdate =? , payAmount = ? , paySlip=? WHERE id = ?",
            [bank, createdate, payAmount, paySlip, id],
            (error, result, fields) => {
                if (error) throw error;

                let message = "";
                if (result.changedRows === 0) {
                    message = "not found";
                } else {
                    message = "success delete";
                }
                return res.send({
                    error: false,
                    data: result,
                    message: message,
                });
            }
        );
    }
});

app.put("/address", (req, res) => {
    let id = 1;
    let name = req.body.name;
    let address = req.body.singleAddress;
    let tambon = req.body.subdistrict;
    let amphur = req.body.district;
    let province = req.body.province;
    let zipCode = req.body.zipcode;
    let phone = req.body.phone;

    if (
        !name ||
        !tambon ||
        !amphur ||
        !province ||
        !zipCode ||
        !phone ||
        !address
    ) {
        return res.status(400).send({ error: true, mesage: "dont success" });
    } else {
        con.query(
            "UPDATE address SET address= ? ,name= ?  ,tambon= ? , amphur= ? , province= ? , zipCode= ? , phone= ? WHERE id = ?",
            [address, name, tambon, amphur, province, zipCode, phone, id],
            (error, result, fields) => {
                if (error) throw error;
                return res.send({
                    error: false,
                    data: result,
                    message: "success!!",
                });
            }
        );
    }
});

//delete
app.delete("/openbill", (req, res) => {
    let id = req.body.id;
    console.log(id);

    if (!id) {
        return res.status(400).send({ error: true, message: "dont success" });
    } else {
        con.query(
            "DELETE FROM open_bill WHERE id=?",
            [id],
            (error, result, fields) => {
                if (error) throw error;

                let message = "";
                if (result.affectedRows === 0) {
                    message = "not found";
                } else {
                    message = "success delete";
                }
                return res.send({
                    error: false,
                    data: result,
                    message: message,
                });
            }
        );
    }
});

app.listen(3000, () => {
    console.log("node running port 3000");
});

module.exports = app;

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



//get_customer
app.get("/customer", (req, res) => {
  try {
    con.query("SELECT * FROM customer", (error, results, fields) => {
        if (error) throw new Error(error);

        return res
            .status(200)
            .send({ status: 200, message: "success", data: results });
    });
} catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
}
});


//customer/:id
app.get("/customer/:id", (req, res) => {
  const customerId = req.params.id;

  try {
      con.query(
          `SELECT * FROM customer where id = ${customerId}`,
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



//put_customer/:id
app.put("/customer/:id", (req, res) => {
  const customerId = req.params.id;
  const name = req.body.name;
  const customer = req.body.customer;
  const nameCustumber = req.body.nameCustumber;
  const tambon = req.body.tambon;
  const aumpur = req.body.aumpur;
  const phone = req.body.phone;
  const zipcode = req.body.zipcode;

  try {
      con.query(
          `UPDATE customer SET name = '${name}', customer = '${customer}', nameCustumber = '${nameCustumber}',
          tambon = '${tambon}', aumpur = '${aumpur}' , phone = '${phone}',zipcode = '${zipcode}'
          where id = ${customerId}`,
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


//delete/customer/:id
app.delete("/customer/:id", (req, res) => {
  const customerId = req.params.id;

  try {
      con.query(
          `DELETE FROM customer where id = ${customerId}`,
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


//get/BackAccount
app.get("/bank_accounts", (req, res) => {
  try {
    con.query("SELECT * FROM bankacout", (error, results, fields) => {
        if (error) throw new Error(error);

        return res
            .status(200)
            .send({ status: 200, message: "success", data: results });
    });
} catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
}
});


//get/Order
app.get("/orders", (req, res) => {
  try {
    con.query("SELECT * FROM orders", (error, results, fields) => {
        if (error) throw new Error(error);

        return res
            .status(200)
            .send({ status: 200, message: "success", data: results });
    });
} catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
}
});


//post/Order
app.post("/orders", (req, res) => {
  const codeBill = req.body.codeBill;
  const customerId	 = req.body.customerId	;
  const typeDelivery = req.body.typeDelivery;
  const deliverly = req.body.deliverly;
  const traking = req.body.traking;
  const status = req.body.status;
  const sumPrice = req.body.sumPrice;
  const countProduct = req.body.countProduct;
  const creactAt = new Date().toJSON().split('T')[0];

  try {
      con.query(
          "INSERT INTO orders(codeBill, customerId	, typeDelivery, deliverly, traking, status, sumPrice,countProduct,creactAt) VALUES(?,?,?,?,?,?,?,?,?)",
          [codeBill, customerId	, typeDelivery, deliverly, traking, status, sumPrice, countProduct ,creactAt],
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


//customer/:id
app.get("/orders/:id", (req, res) => {
  const ordersId = req.params.id;

  try {
      con.query(
          `SELECT * FROM orders where id = ${ordersId}`,
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


//put/orders/:id
app.put("/orders/:id", (req, res) => {
  const ordersId = req.params.id;
  const codeBill = req.body.codeBill;
  const customerId	 = req.body.customerId	;
  const typeDelivery = req.body.typeDelivery;
  const deliverly = req.body.deliverly;
  const traking = req.body.traking;
  const status = req.body.status;
  const sumPrice = req.body.sumPrice;
  const countProduct = req.body.countProduct;

  try {
      con.query(
          `UPDATE orders SET codeBill = '${codeBill}', customerId = '${customerId}', typeDelivery = '${typeDelivery}',
          deliverly = '${deliverly}', traking = '${traking}' , status = '${status}', sumPrice = '${sumPrice}',countProduct = '${countProduct}'
          where id = ${ordersId}`,
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



//delete/orders/:id
app.delete("/orders/:id", (req, res) => {
  const ordersId = req.params.id;

  try {
      con.query(
          `DELETE FROM orders where id = ${ordersId}`,
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




//post/ordersDetail
app.post("/order_details/:order_id", (req, res) => {
  const orderID = req.params.order_id;
  const codeProduct	 = req.body.codeProduct	;
  const nameProduct = req.body.nameProduct;
  const amount = req.body.amount;
  const price = req.body.price;

  try {
      con.query(
          "INSERT INTO order_details (orderID , codeProduct	, nameProduct, amount, price) VALUES(?,?,?,?,?)",
          [orderID , codeProduct	, nameProduct, amount, price],
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


//put/order_details/:id
app.put("/order_details/:id", (req, res) => {
  const order_detailsId = req.params.id;
  const orderID = req.params.order_id;
  const codeProduct	 = req.body.codeProduct	;
  const nameProduct = req.body.nameProduct;
  const amount = req.body.amount;
  const price = req.body.price;


  try {
      con.query(
          `UPDATE order_details SET orderID = '${orderID}', codeProduct = '${codeProduct}', nameProduct = '${nameProduct}',
          amount = '${amount}', price = '${price}' 
          where id = ${order_detailsId}`,
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




//get/:orders_id
app.get("/order_details/:orders_id", (req, res) => {
  const orderID = req.params.orders_id;

  try {
      con.query(
          `SELECT * FROM order_details where orderID = ${orderID}`,
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


///delete/order_details
app.delete("/order_details/:id", (req, res) => {
  const order_detailsId = req.params.id;

  try {
      con.query(
          `DELETE FROM order_details where id = ${order_detailsId}`,
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



//post/transfer
app.post("/transfer/:order_id", (req, res) => {
  const payAcount = req.body.payAcount;
  const payDate	 = req.body.payDate	;
  const payAmout = req.body.payAmout;
  const slip = req.body.slip;
  const orderID = req.params.order_id;

  try {
      con.query(
          "INSERT INTO transfer(payAcount, payDate	, payAmout, slip, orderID) VALUES(?,?,?,?,?)",
          [payAcount, payDate	, payAmout, slip, orderID],
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



//get/transfer/:orders_id
app.get("/transfer/:orders_id", (req, res) => {
  const orderID = req.params.orders_id;

  try {
      con.query(
          `SELECT * FROM transfer where orderID = ${orderID}`,
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



//get/transfer
app.get("/transfer", (req, res) => {
  try {
    con.query("SELECT * FROM transfer", (error, results, fields) => {
        if (error) throw new Error(error);

        return res
            .status(200)
            .send({ status: 200, message: "success", data: results });
    });
} catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
}
});


//put/transfer/:id
app.put("/transfer/:id", (req, res) => {
  const transferID = req.params.id;
  const payAcount = req.body.payAcount;
  const payDate	 = req.body.payDate	;
  const payAmout = req.body.payAmout;
  const slip = req.body.slip;
  const orderID = req.params.order_id;


  try {
      con.query(
          `UPDATE transfer SET payAcount = '${payAcount}', payDate = '${payDate}', payAmout = '${payAmout}',
          slip = '${slip}', orderID = '${orderID}' 
          where id = ${transferID}`,
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

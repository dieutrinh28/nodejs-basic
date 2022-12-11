import pool from "../configs/connectDB";

let getHomepage = async(req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users');
    
    return res.render('index.ejs', { dataUser: rows, test: 'abc string test'})
}

let getDetailPage = async(req, res) => {
    //req.params.id: lấy user động theo id
    let userId = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM users where id = ?`, [userId]);
   
    return res.send(JSON.stringify(user))
}

let createNewUser = async(req, res) => {
    console.log('check req: ', req.body);

    // cách dùng destructuring:
    let {firstName, lastName, email, address} = req.body;
   
    // let firstName = req.body.firstName;
    // let lastName = req.body.lastName;
    // let email = req.body.email;
    // let address = req.body.address;

    await pool.execute('INSERT INTO users (firstName, lastName, email, address) VALUES (?,?,?,?)', [firstName, lastName, email, address]); 
    
    return res.redirect('/');
}

let deleteUser = async(req, res) => {
    let userId = req.body.userId;
    await pool.execute('DELETE FROM users WHERE id = ?', [userId])
    return res.redirect('/');
}

let getEditPage = async(req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [userId]);

    return res.render('update.ejs', { dataUser: user[0]});
}

let postUpdateUser = async(req, res) => {
    let {firstName, lastName, email, address, id} = req.body;
    await pool.execute('UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?', 
    [firstName, lastName, email, address, id]);
    
    return res.redirect('/');
}

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser
}
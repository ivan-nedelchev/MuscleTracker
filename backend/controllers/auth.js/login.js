const { Router } = require('express');
const router = Router();
router.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        await req.auth.login(username, password);
        res.redirect('/');
    } catch (err) {
        res.locals.errors = [{ msg: err.message }];
        res.render('login', { title: 'Login' });
    }
});
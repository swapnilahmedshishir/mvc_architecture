import express from 'express';
const router = express.Router();

router.get('/' , (res , req) => {
    req.send('responce is get method')
});
router.put('/' , (res , req) => {
    req.send('responce is put method')
});

router.delete('/' , (res , req) => {
    req.send('responce is delete method')
});

router.post('/' , (res , req) => {
    req.send('responce is post method')
});

router.get('/admin' , (res , req) => {
    req.send('responce is admin router')
});
router.get("/register", (req, res) => {
    res.send("<h1>I am a get request at register route</h1>");
  });
  
  router.get("/login", (req, res) => {
    res.send("<h1>I am a get request at login route</h1>");
  });

export {router as AdminRouter}
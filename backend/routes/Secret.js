const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  try {
    // The token should be in the request body, not the entire body
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({ error: 'Token is missing in the request body' });
    }

    const user = jwt.verify(token, 'kamranimazmohammed109677');
    if(user){
        res.status(200).json({ message:true });
    }
    else{
        res.status(404).json({message:false})
    }
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const User=require('../Models/UserModel');

exports.createUser=async (req, res)=>{
    const {name, email, phone, password}=req.body;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ name, email, phone, password:hashedPassword });
    await user.save();
    res.json({ user });

}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userLogin =await User.findOne({ email:email });
        if (userLogin) {
            const isVerified = await bcrypt.compare(password, userLogin.password);
            if (isVerified) {
                const { _id, email } = userLogin;
                const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.json({ token, userLogin });
            } else {
                return res.status(401).json({ message: 'Incorrect Password' });
            }
        }
        return res.status(400).json({ message: "User doesn't exixst" });

    } catch (e) {
        console.log(e.message);
    }
}

exports.getUserDetails = async (req, res)=>{
    const token=req.headers['x-access-token'];
    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        const email=decoded.email;
        const user_details=await User.findOne({email:email});
        return res.json({status:'ok', user:user_details})
    }catch(error){
        console.log(error);
    }
}
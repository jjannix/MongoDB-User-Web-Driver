const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.DBADRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));


const userSchema = new mongoose.Schema({
    name: String,
    userId: String
});
const User = mongoose.model('User', userSchema);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error('Error listing users:', err);
        res.status(500).json({ error: 'Error listing users' });
    }
});

app.post('/users', async (req, res) => {
    const { name, userId } = req.body;
    try {
        const newUser = new User({ name, userId });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Error creating user' });
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

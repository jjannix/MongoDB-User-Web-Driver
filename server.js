const mongoose = require('mongoose');

mongoose.connect(process.env.DBADRESS,
    {
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

async function createUser(name, userId) {
    try{
        const newUser = new User({ name, userId });
        await newUser.save()
        console.log('User created:', newUser);
    } catch(err) {
        console.error('Error creating user:', err);
    }
}

async function findUserById(userId) {
    try{
        const user = await User.findOne({ userId });
        console.log('User found:', user);
    } catch(err) {
        console.error('Error finding user:', err);
    }
}

async function updateUser(userId, newName) {
    try{
        const user = await User.findOneAndUpdate({ userId }, { name: newName }, { new: true });
        console.log('User updated:', user);
    } catch(err) {
        console.error('Error updating user:', err);
    }
}

async function deleteUser(userId) {
    try{
        const user = await User.findOneAndDelete({ userId });
        console.log('User deleted:', user);
    } catch(err) {
        console.error('Error deleting user:', err);
    }
}

async function listAllEntries() {
    try{
        const users = await User.find();
        console.log('All users:', users);
    } catch(err) {
        console.error('Error listing users:', err);
    }
}


(async () => {
})();
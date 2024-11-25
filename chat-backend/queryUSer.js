const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://isabellaotoo25:DIk2SnWjQRi2wYs3@cluster0.kle1i.mongodb.net/chatApp?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String,
}));

(async () => {
    try {
        const user = await User.findOne({ username: "Condolisa" });
        console.log(user);
    } catch (err) {
        console.error("Error querying user:", err);
    } finally {
        mongoose.connection.close();
    }
})();

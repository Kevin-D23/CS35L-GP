import mongoose from "mongoose";

const connect = async () => {
  mongoose.connect(
    "mongodb://admin:VbVnRrz2ZtO4wF8u@ac-cn91wmi-shard-00-00.ock06me.mongodb.net:27017,ac-cn91wmi-shard-00-01.ock06me.mongodb.net:27017,ac-cn91wmi-shard-00-02.ock06me.mongodb.net:27017/Database?ssl=true&replicaSet=atlas-tto2tw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  );
};

export default connect;

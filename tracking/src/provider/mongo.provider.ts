import {MongoClient} from "mongodb";

export const mongoProvider = {
    provide: 'MongoToken',
    useFactory: async () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(process.env.MONGO_HOST, function (err, client) {
                resolve(client);
            })
        });
    }
};
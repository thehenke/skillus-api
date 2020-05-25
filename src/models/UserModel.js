import connection from "../config/connection";

export const userModel = {
    UserModel: {

        all() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user`, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
            });
        });
        },

        get(id) {
        return new Promise((resolve, reject) => {
            connection.query(
            `SELECT * FROM user WHERE id = ${id}`,
            (error, result) => {
                if (error) {
                reject(error);
                } else {
                resolve(result[0]);
                }
            }
            );
        });
        },
    },
};

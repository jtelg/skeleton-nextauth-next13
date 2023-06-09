import executeQuery from "../lib/db";

export default class userController {
    async loginEmail(email: string) {
        const sql = `SELECT u.iduser,
                        u.email,
                        u.name, 
                        u.create_time, 
                        u.role,
                        u.password,
                        u.registeredWith
                     FROM user u WHERE u.email = '${email}';`;
        const user = (await executeQuery(sql)) as Array<any>;
        if (!user[0]) return null;
        return user[0];

    }

    async registerUser(user: UserData) {
        const sql = `INSERT INTO user (email, password, name, registeredWith) 
            VALUES ('${user.email}', '${user.password}', '${user.name}', '${user.registeredWith}')`
        return await executeQuery(sql);
    }

    async getUserByID(idParam: string){
        const sql = `SELECT u.iduser,
                            u.email,
                            u.name, 
                            u.create_time, 
                            u.role,
                            u.phone,
                            u.address,
                            u.CUIT,
                            u.registeredWith 
                    FROM user u WHERE u.iduser = '${idParam}' OR u.name = '${idParam}' OR u.email = '${idParam}';`;
        const user = (await executeQuery(sql)) as Array<any>;
        if (!user[0]) return null;
        return user[0];
    }
}

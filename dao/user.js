class User {
    id
    account
    name
    phone_number
    password
    coin
    is_delete
    create_at
    constructor(id, account, name, phone_number, password, coin, is_delete, create_at) {
        this.id = id;
        this.account = account;
        this.name = name;
        this.phone_number = phone_number;
        this.password = password;
        this.coin = coin;
        this.is_delete = is_delete;
        this.create_at = create_at;
    }
    getAll(params) {
        
    }
}
const getByAccount = "select * from user";
const insert = "insert into `user` (`account`,`name`,`phone_number`,`password`,`coin`,`is_delete`,`create_at`) values (?,?,?,?,?,?,?)";
interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    first_name?: string;
    last_name?: string;
}

export default User;
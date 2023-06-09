interface UserDataLogin {
    email: string;
    password: string;
}

interface UserData {
    iduser: number;
    create_time: string;
    role: string;
    email: string;
    password: string;
    name: string;
    phone: string;
    address: string;
    CUIT: string;
    registeredWith: string;

    // variables de uso que no estan en la base de datos.
    image: string;
    provider: string;
}

interface ItemsMenuNavigate{
    title: string;
    icon: string;
    id: number;
    link: string
} 
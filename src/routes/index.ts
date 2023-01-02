export const routes = {
    login: {
        path: "login",
        name: "Войти",
        genereteFullPath() {
            return routes.auth.path + "/" + this.path;
        }
    },
    registration: {
        path: "registration",
        name: "Регистрация",
        genereteFullPath() {
            return routes.auth.path + "/" + this.path;
        }
    },
    auth: {
        path: "/auth",
        name: "Авторизация"
    },
}
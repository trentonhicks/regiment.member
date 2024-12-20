import type { User } from "~/types/User";

export function useAuth() {
    const { gun: _gun, user: _user } = useGun();

    async function _userExists(username: string) {
        return new Promise((resolve) => {
            _gun.get(`~@${username}`).once((data) => {
                resolve(!!data);
            });
        });
    }

    async function getUser() : Promise<User | undefined> {
        return new Promise((resolve) => {
            const publicKey = _user.is?.pub as string | undefined;

            if (!publicKey) {
                resolve(undefined);
            } else {
                _gun.user(publicKey).get("alias").once((alias) => {
                    resolve({
                        username: alias,
                    })
                });
            }
        });
    }
    
    async function register(username: string, password: string) {
        return new Promise(async (resolve, reject) => {
            const userExists = await _userExists(username);
    
            if (userExists) {
                reject("User already exists");
                return;
            }
    
            _user.create(username, password, async (response: any) => {
                const properties = Object.keys(response);
        
                if (properties.includes("err")) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        });
    }
    
    async function login(username: string, password: string) {
        return new Promise(async (resolve, reject) => {
            const userExists = await _userExists(username);
    
            if (!userExists) {
                reject("User does not exist");
                return;
            }
    
            _user.auth(username, password, async (response: any) => {
                const properties = Object.keys(response);
        
                if (properties.includes("err")) {
                    reject(response.err);
                } else {
                    resolve(true);
                }
            });
        });
    }
    
    async function logout() {
        return new Promise((resolve) => {
            _user.leave();
            resolve(true);
        });
    }

    return {
        register,
        login,
        logout,
        getUser,
    }
}
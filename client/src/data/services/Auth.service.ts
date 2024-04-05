import { getAuth, Auth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { api } from "../../api";

class Authentication {
    private auth: Auth;
    private userCredential: UserCredential | null = null;

    constructor() {
        this.auth = getAuth();
    }

    private async signInWithEmail(email: string, password: string) {
        try {
            this.userCredential = await signInWithEmailAndPassword(this.auth, email, password);
        } catch (error) {
            console.error("Erro ao Logar", error);
        }
    }

    public async signInWithGoogle() {
        try {
            const result = await api.googleLogin();
            if (!result || !result.user) {
                throw new Error('Erro ao efetuar login com o Google.');
            }

            return result;
        } catch (error: any) {
            console.error('Erro durante o login com o Google:', error.message);
            return null;
        }
    }

    public getAuth(): Auth {
        return this.auth;
    }

    public async getUserCredential(email: string, password: string): Promise<UserCredential | null> {
        await this.signInWithEmail(email, password);
        return this.userCredential;
    }
}

export default Authentication;

import { Driver } from "../driver/pw.driver";

export class LoginPageObject {

    /** Login Page Elements */
    private elemUsername = '[id="user-name"]';
    private elemPassword = '[id="passsword"]';
    private elemBtnLogin = '[id="login-button"]';

    public getElemUsername(){
        return this.elemUsername;
    }

    public getElemPasswrod(){
        return this.elemPassword;
    }

    public getElemBtnLogin(){
        return this.elemBtnLogin;
    }

    public setElemUsername(value: string){
        Driver.fill(this.getElemUsername(),value);
    }

    public setElemPassword(value: string){
        Driver.fill(this.getElemPasswrod(), value);
    }

    public clickBtnLogin(){
        Driver.click(this.getElemBtnLogin());
    }


}
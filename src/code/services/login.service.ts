
import { LoginCredInfo } from "../contracts/users";
import { Driver } from "../driver/pw.driver";
import { LoginPageObject } from "../pageObjects/login.pageObject";
import { ContextService } from "./context.service";
import { NavigationService } from "./navigation.service";

export class LoginService {

    private loginPageObject: LoginPageObject = new LoginPageObject();
   

    public async loginSauceDemo(loginCredinfo: LoginCredInfo = ContextService.getWebLoginInfo()): Promise<void>{
        
        
        /** wait applied just to see the steps happening */
        Driver.sleep(3000);
        await this.loginPageObject.setElemUsername(loginCredinfo.username);
         /** wait applied just to see the steps happening */
         Driver.sleep(3000);
        await this.loginPageObject.setElemUsername(loginCredinfo.password);
         /** wait applied just to see the steps happening */
         Driver.sleep(3000);
        await this.loginPageObject.clickBtnLogin();
        

    }
}
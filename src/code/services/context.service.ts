import { LoginCredInfo } from "../contracts/users";
import { Helper } from "../helper/helper";
import { DataContext } from "../models/DataContext";

export class ContextService {

    private static dataContext: DataContext = new DataContext();

    /** data context read from testData.json file  */
    private static dataContextJson: any;

    private static dataFileJSON = Helper.getContextData();


     /** Get web login information in context */
 public static getWebLoginInfo(): LoginCredInfo {

    /** User profile info to return */
    let loginCredInfoToReturn: LoginCredInfo = new LoginCredInfo();

    /** If data context and user information exist, then extract it */
    if (this.dataContext && this.dataContext.loginCredInfo) {
        loginCredInfoToReturn = this.dataContext.loginCredInfo;
    }
    else if (this.dataFileJSON && this.dataFileJSON.loginCredInfo) {

        /** return user profile info from json */
        loginCredInfoToReturn = this.dataFileJSON.webloginInfo;

        /** Set web login info in data context */
        this.dataContext.loginCredInfo = loginCredInfoToReturn;
    }

    else if (this.dataContextJson && this.dataContextJson.webLoginInfo) {

        /** return user profile info from json */
        loginCredInfoToReturn = this.dataContextJson.webLoginInfo;

        /** Set web login info in data context */
        this.dataContext.loginCredInfo = loginCredInfoToReturn;
    }

    /** return user profile info */
    return loginCredInfoToReturn;

}
}
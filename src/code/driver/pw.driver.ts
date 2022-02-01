import { Browser, BrowserContextOptions, Frame, Page, TestInfo } from "@playwright/test";

export class Driver{

    public static browser : Browser;
    public static currentContextIndex : number = 0;
    public static currentPageIndex : number = 0;
    public static frame : Frame = undefined;
    public static browserOptions : BrowserContextOptions;
    public static testInfo : TestInfo;

    /** this function will return the current visible page object of the Page  */
    private static getPage () : Page {
        let currentContext = this.browser.contexts()[this.currentContextIndex]
        return currentContext.pages()[this.currentPageIndex];

    }

    /** this method will return frames of the current Page Object */
    public static getActiveFrame() : Frame {
        let page = Driver.getPage();

        if (Driver.frame != undefined ) {
            return Driver.frame;
        }
        else {
            return page.mainFrame();
        }
    }
    
    /** this method will be  used to navigate to the page and wait until the load event of the DOM if fired */
    public static async goto(url: string){
        await Driver.getPage().goto(url);
    }

    /** interacting with browser for filling the text field 
     * @param locator locator of the element to filled
     * @param value value of the text field to be set
    */
    public static async fill(locator: string, value: any){
        await Driver.getActiveFrame().fill(locator, value);

    }

    /** interacting with browser for click the target element 
     * @param locator locator of the element to be clicked
    */
    public static async click(locator: string){
        await Driver.getActiveFrame().click(locator);
    }

    public static async forkNewBrowserInstance(continueState: boolean = false){
        
        let browserOptions = {};

        if (!continueState){
            browserOptions = { ...this.browserOptions, storageState: undefined};
        }
        else {
            browserOptions = this.browserOptions;
        }

        await (await this.browser.newContext(browserOptions)).newPage();
        this.currentContextIndex = this.browser.contexts().length - 1;
        this.currentContextIndex = 0;
    }

    /** wait for the given time before perfoming next action 
     * @param timeout time in millisecond 
    */
   public static async sleep(timeout: number){
       await this.getPage().waitForTimeout(timeout)
   }
    

}
import { Driver } from "../driver/pw.driver";

export class NavigationService{

    public async launchURL(url: string): Promise<void> {
        await Driver.goto(url);
    }
}
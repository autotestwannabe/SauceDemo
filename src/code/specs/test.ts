import {test} from '@playwright/test';
import { LoginCredInfo } from '../contracts/users';
import { LoginService } from '../services/login.service';
import { NavigationService } from '../services/navigation.service';

let loginSvc: LoginService = new LoginService();
let navigationSvc: NavigationService = new NavigationService();
let loginCredinfo: LoginCredInfo = new LoginCredInfo();

test('Login to sauce demo', async ({page}) => {

navigationSvc.launchURL(loginCredinfo.url);
await loginSvc.loginSauceDemo();
    
});


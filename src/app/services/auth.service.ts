import { Injectable } from "@angular/core";
import { Appwrite, Models } from "appwrite";
import { AppService } from "../app.service";


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    account: Models.User<Models.Preferences> | null;
    session: Models.Session | null;
    sdk: Appwrite;
    constructor(private appService: AppService) {
        this.sdk = this.appService.getAppWriteSdk();
        this.session = null;
        this.account = null;

        this.getUser();
        this.getCurrentSession();


    }
    /* Logins */
    googleAuth() {

        // Go to OAuth provider login page
        this.appService.getAppWriteSdk().account.createOAuth2Session('google', 'http://localhost:4200/home', 'http://localhost:4200/login');
        this.getUser();
        this.getCurrentSession();

    }

    /* Logout */
    logout() {
        console.log(this.session);
        let promise = this.sdk.account.deleteSession(this.session!.$id);

        promise.then((response) => {
            this.account = null;
            this.session = null;
        }, function (error) {
            console.log(error); // Failure
        });
    }
    isSessionActive(): boolean {

        if (!this.sdk.account) {
            return true;
        } else {
            return false;
        }
    }

    async getUser() {
        let promise = this.appService.getAppWriteSdk().account.get();

        await promise.then((response) => {

            this.account = response;

        }, function (error) {
            console.log(error); // Failure
        });
        return this.account;
    }
    getCurrentSession() {
        let promise = this.appService.getAppWriteSdk().account.getSession("current");

        promise.then((response) => {

            this.session = response;

        }, function (error) {
            console.log(error); // Failure
        });
    }
    getCurrentSessionPromise() {
        let promise = this.appService.getAppWriteSdk().account.getSession("current");

        return promise;
    }
    getUserPromise() {
        let promise = this.appService.getAppWriteSdk().account.get();

        return promise;
    }

    /* Getter and setter */
    getAccount(): Models.User<Models.Preferences> | null {
        return this.account;
    }


}


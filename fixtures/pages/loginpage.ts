import {Page} from '@playwright/test'


class logInPageActions{
    private page: Page | undefined

    constructor(page: Page) {
        this.page = this.page
      }
    

    async navigateToUrl(url :string){
        await this.page.goto(url)

    }
}

export default logInPageActions
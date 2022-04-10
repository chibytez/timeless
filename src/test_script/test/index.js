import Login from '../page_object/LoginPage'
import Logout from "../page_object/Logout"

describe("Test Automation", () =>{
    const login = new Login()
    const logout = new Logout()
    it("Login a user", async ()=>{
       await login.firstpage()
       await login.emailInput('chibuike@example.com')
       await login.passwordInput('Password01')
       await driver.hideKeyboard();
       await login.loginSubmit()
    })
    it("Should Logout a user", async()=>{
        await logout.settingPage()
        await logout.mainAccount()
        await logout.logoutButton()
        await logout.logoutButton()
        
    })
})
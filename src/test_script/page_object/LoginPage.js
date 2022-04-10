

class LoginPage {
    firstpage() {
        return $('~email_auth').click()
    }

    emailInput(value) {
        return $('~E-Mail').setValue(value)
    }

    passwordInput(value) {
        return $('~Passwort').setValue(value)
    }

   outsider() {
       return $('(//XCUIElementTypeOther[@name="Anmelden"])[4]/XCUIElementTypeOther[3]').click()
   }

    loginSubmit() {
        return $('~login_btn').click()
    }
}

export default LoginPage
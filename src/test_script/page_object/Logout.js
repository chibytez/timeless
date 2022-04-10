class Logout {
  settingPage(){
      return $('~settings-btn').click()
  }
  mainAccount() {
      return $('~Mein Account').click()
  }

  logoutButton() {
      return $('~Abmelden').click()
  }
}

export default Logout
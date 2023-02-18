foodBanks = [];
foodBanksLoginInfo = {};

class signUpValidation(username, password1, password2) => {
    if (username in foodBanksLoginInfo)
        return 3
    if (!hasLowerCase(password1) || !hasUpperCase(password1) || !(/\d/.test(password1)))
        return 2
    if (password2 != password1)
        return 1
    return 0
}
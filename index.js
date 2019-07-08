/**
 * Get value of a cookie
 * @param key
 * @returns {string}
 */
function getCookie(key) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + key + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

/**
 * Set value of a cookie
 * @param key
 * @param value
 * @param days
 */
function setCookie (key, value, days) {
    let expires = "";
    const DAYS_TO_MS = 86400000;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * DAYS_TO_MS));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = key + "=" + (value || "") + expires + "; path=/";
}

/**
 * Remove a cookie
 * @param key
 */
function removeCookie(key) {
    document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

/**
 * Clear cookies
 */
function clearCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        removeCookie(name);
    }
}

/**
 * Get value of a session storage item
 * @param key
 */
function getLocalStorageItem(key) {
    localStorage.getItem(key);
}

/**
 * Set value of a session storage item
 * @param key
 * @param value
 */
function setLocalStorageItem(key, value) {
    localStorage.setItem(key, value);
}

/**
 * Remove a local storage item
 * @param key
 */
function removeLocalStorageItem(key) {
    localStorage.removeItem(key);
}

/**
 * Clear local storage
 */
function clearLocalStorage() {
    localStorage.clear();
}

/**
 * Get value of a session storage item
 * @param key
 */
function getSessionStorageItem(key) {
    sessionStorage.getItem(key);
}

/**
 * Set value of a session storage item
 * @param key
 * @param value
 */
function setSessionStorageItem(key, value) {
    sessionStorage.setItem(key, value);
}

/**
 * Remove a session storage item
 * @param key
 */
function removeSessionStorageItem(key) {
    sessionStorage.removeItem(key);
}

/**
 * Clear session storage
 */
function clearSessionStorage() {
    sessionStorage.clear();
}

/**
 *
 * @param cookies
 * @param localStorage
 * @param sessionStorage
 */
function clearStorage(cookies, localStorage, sessionStorage) {
    if (cookies) {
        clearCookies();
    }

    if (localStorage) {
        clearLocalStorage();
    }

    if (sessionStorage) {
        clearSessionStorage();
    }
}

module.exports = {
    getCookie: getCookie,
    setCookie: setCookie,
    removeCookie: removeCookie,
    clearCookies: clearCookies,
    getLocalStorageItem: getLocalStorageItem,
    setLocalStorageItem: setLocalStorageItem,
    removeLocalStorageItem: removeLocalStorageItem,
    clearLocalStorage: clearLocalStorage,
    getSessionStorageItem: getSessionStorageItem,
    setSessionStorageItem: setSessionStorageItem,
    removeSessionStorageItem: removeSessionStorageItem,
    clearSessionStorage: clearSessionStorage,
    clearStorage: clearStorage,
};
export function setLocalStorage(token: string) {
  localStorage.setItem("token", token);
}

export function getLocalStorage() {
  return localStorage.getItem("token");
}

export function clearLocalStorage() {
  localStorage.clear();
}

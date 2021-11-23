export function getTheme() {
  return localStorage.getItem("theme")
}

export function setTheme(theme: string) {
  theme === "dark"
    ? document.querySelector("html")?.classList.add("dark")
    : document.querySelector("html")?.classList.remove("dark")

  localStorage.setItem("theme", theme)
}

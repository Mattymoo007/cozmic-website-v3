export function initColorScheme() {
  // check if on client side
  if (typeof window === "undefined") return

  // check if dark mode exists in local storage
  const colorSchemeIsDark = localStorage.getItem("colorSchemeIsDark")

  // check color preference
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // if not save color scheme preference in local storage
  if (colorSchemeIsDark === null) {
    localStorage.setItem("colorSchemeIsDark", String(isDark))
  }

  // else set color scheme preference from local storage
  else {
    setColorScheme(colorSchemeIsDark === "true")
  }
}

export function setColorScheme(isDark: boolean) {
  // set color scheme
  isDark
    ? document.querySelector("html")?.classList.add("dark")
    : document.querySelector("html")?.classList.remove("dark")

  // save color scheme preference in local storage
  localStorage.setItem("colorSchemeIsDark", String(isDark))
}

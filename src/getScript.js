export function getScript(url) {
  return new Promise((resolve, reject) => {
    let done = false
    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')

    script.src = url

    script.onload = script.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true
        resolve()
      }
      else {
        reject()
      }
    }

    script.onerror = () => reject()

    head.appendChild(script)
  })
}

export function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export function loadImage(src: string) {
  return new Promise(resolve => {
    const imgEl = document.createElement('img') //<img src="이미지주소" alt="대체텍스트"/>
    imgEl.addEventListener('load', () => {
      resolve(imgEl)
    })
    imgEl.src = src
  })
}

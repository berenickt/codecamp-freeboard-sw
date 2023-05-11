export const PRELOADED_IMAGES: HTMLImageElement[] = []

export const preloadImage = (images: string[]) => {
  images.forEach(element => {
    const img = new Image()
    img.src = element
    img.onload = () => PRELOADED_IMAGES.push(img)
  })
}

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
    // gets relative path of image 
    // and 
    // import.meta.url: base URL of my website 
    // and appends the relative path to the website URL  
    // make it easy to dynamically import images. 
}

export const tabaleLimit=()=>{
    const heigh = document.documentElement.offsetHeight;
    const limit = Math.floor((heigh - 250) / 70);
    return limit
}
// const getImgPromesa = () => new Promise(resolve => resolve('http://www.google.es'));

// getImgPromesa().then(console.log);

const getImage = async () => {
    const apiKey = "0tvd5dyESMawJWm3Sf8qRu19SV2ozR91";
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const data = await resp.json();
    return data;

}
getImage().then(console.log);

const showImage = async () => {
    await getImage().then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    });
};
showImage();

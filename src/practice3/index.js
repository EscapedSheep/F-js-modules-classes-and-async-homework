export const getPoetry = async () => {
    try {
        const response = await fetch("https://v1.jinrishici.com/all.json");
        const data = await JSON.parse(response.body);
        return [data.origin, data.author, data.content];
    } catch (e) {
        console.log(e);
    }
};
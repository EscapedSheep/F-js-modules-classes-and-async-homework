export const getPoetry = async () => {
    try {
        // TODO feedback：url可以抽成变量
        const response = await fetch("https://v1.jinrishici.com/all.json");
        // TODO feedback：也可以用response.json()
        const data = await JSON.parse(response.body);
        return [data.origin, data.author, data.content];
    } catch (e) {
        console.log(e);
    }
};

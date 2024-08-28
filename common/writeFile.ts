export default async (content: string, fileName = './temp.json') => {
    await Bun.write(fileName, content);
}
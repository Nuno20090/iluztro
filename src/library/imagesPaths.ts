export class ImagePaths {
    static get(path: string): string {
        const result = process.env.PUBLIC_URL + "/" + path;
        return result;
    }
}
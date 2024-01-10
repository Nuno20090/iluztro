export class ImagePaths {

    static seed = 69;

    static get(path: string): string {

        if (path === undefined) {
            console.error("ImagePaths.get: path is undefined");
            return "";
        }

        if (path.startsWith("dummy")) {
            //ImagePaths.seed += 1;
            return `https://picsum.photos/seed/${ImagePaths.seed}/800/600?grayscale`;
        }

        const result = process.env.PUBLIC_URL + "/" + path;
        return result;
    }
}
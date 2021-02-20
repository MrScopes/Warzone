import fetch from 'node-fetch';

export class Utilities {
    static async APIRequest(path) {
        console.log('https://api.warz.one' + path);
        const req = await fetch('https://api.warz.one' + path);
        return await req.json();
    }
}
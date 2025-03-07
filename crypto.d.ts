declare namespace CryptoJS {
    interface WordArray {
        toString(encoder?: any): string;
    }

    interface CipherParams {
        toString(encoder?: any): string;
    }

    namespace enc {
        const Utf8: {
            parse(str: string): WordArray;
        };
        const Base64: {
            parse(str: string): WordArray;
            stringify(wordArray: WordArray): string;
        };
    }

    namespace AES {
        function encrypt(
            message: string | WordArray,
            key: string | WordArray,
            cfg?: { iv: WordArray }
        ): CipherParams;

        function decrypt(
            ciphertext: string | CipherParams,
            key: string | WordArray,
            cfg?: { iv: WordArray }
        ): WordArray;
    }
}

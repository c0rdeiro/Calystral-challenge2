export default class Crypto {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  normalizePlaintext(): string {
    return this.message
      .toLocaleLowerCase()
      .replaceAll(/\W/g, "") // \W represents non-word character
  }

  size(): number {
    throw new Error("Method not implemented.");
  }
  plaintextSegments(): string {
    throw new Error("Method not implemented.");
  }
  ciphertext(): string {
    throw new Error("Method not implemented.");
  }
}

export default class Crypto {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  normalizePlaintext(): string {
    this.message = this.message
      .toLocaleLowerCase()
      .replaceAll(/\W/g, "") // \W represents non-word character
    return this.message
  }

  size(): number {
    this.normalizePlaintext()
    return  Math.ceil(Math.sqrt(this.message.length))
  }

  plaintextSegments(): string {
    throw new Error("Method not implemented.");
  }
  ciphertext(): string {
    throw new Error("Method not implemented.");
  }
}

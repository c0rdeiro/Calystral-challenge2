export default class Crypto {
  message: string;

  constructor(message: string) {
    this.message = message;
    this.normalizePlaintext()
  }

  normalizePlaintext(): string {
    this.message = this.message
      .toLocaleLowerCase()
      .replaceAll(/\W/g, "") // \W represents non-word character
    return this.message
  }

  size(): number {
    return  Math.ceil(Math.sqrt(this.message.length))
  }

  plaintextSegments(): string[] {    
    const res: string[] = []
    
    for(let i = 0; i < this.message.length; i += this.size()){
      
      res.push(this.message.substring(i, i+this.size()))
    }

    //check and add if necessary trailing spaces to last element
    if(res[res.length-1].length !== this.size()){
      res[res.length-1] = res[res.length-1] + " ".repeat(this.size() - res[res.length-1].length)
    }

    return res
  }
  
  ciphertext(): string {
    throw new Error("Method not implemented.");
  }
}

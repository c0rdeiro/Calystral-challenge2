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

    return res
  }

  ciphertext(): string {
    const segments = this.plaintextSegments()
    const rows = Math.ceil(this.message.length/this.size())
    let res = ''

    for(let i = 0; i<this.size(); i++){
      for(let j = 0; j<rows; j++)
      {
        res += segments[j].substring(i, i+1)
      }
    }

    return res
  }
}

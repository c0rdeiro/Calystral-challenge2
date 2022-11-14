import divideStringInEqualChunks from "./utils";

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

  rows(): number {
    return Math.ceil(this.message.length/this.size())
  }

  plaintextSegments(): string[] {    
   
    const segments = divideStringInEqualChunks(this.message, this.size())

    //check and add if necessary trailing spaces to last element
    if(segments[segments.length-1].length !== this.size()){
      segments[segments.length-1] = segments[segments.length-1] + " ".repeat(this.size() - segments[segments.length-1].length)
    }

    return segments
  }

  private cipherTextWithSpaces(): string{
    const segments = this.plaintextSegments()
    
    let out = ''
    
    for(let i = 0; i < this.size(); i++){ 
      for(let j = 0; j < this.rows(); j++)
        out += segments[j].substring(i, i+1)

    }
    return out
  }
  
  ciphertext(): string {
    return this.cipherTextWithSpaces().replaceAll(" ", "")
  }

  cipherChunksText() : string{
    return divideStringInEqualChunks(this.cipherTextWithSpaces(), this.rows() ).join(" ")
  }

  
}

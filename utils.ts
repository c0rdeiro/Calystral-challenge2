export default function divideStringInEqualChunks(message: string, chunkSize:number){
    const res: string[] = []
    
    for(let i = 0; i < message.length; i += chunkSize){
      
      res.push(message.substring(i, i+chunkSize))
    }

    return res
}
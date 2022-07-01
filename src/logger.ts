import { isPreviewMode } from "@decentraland/EnvironmentAPI"

//
let prodLogs = false

export function setdclLogs(flag:boolean){
    prodLogs = flag
}

export async function dclLog(message:any){
    if(prodLogs){
        log(message)
    }
    else{
        await isPreviewMode() ? log(message) : null
    }
}
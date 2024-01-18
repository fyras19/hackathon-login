export type RemainingTime = {
    id: number,
    "sens": number,
    "terminus": string,
    "infotrafic": boolean,
    "temps": string,
    "dernierDepart": string,
    "tempsReel": string,
    "ligne": {
        "numLigne": string,
        "typeLigne": number
    },
    "arret": {
        "codeArret": string
    }
}
export type Horaire = {
    "ligne": {
        "numLigne": string,
        "typeligne": number,
        "directionSens1": string,
        "directionSens2": string,
        "accessible": string,
        "etatTrafic": number
    },
    "arret": {
        "codeArret": string,
        "libelle": string,
        "accessible": boolean
    },
    "codeCouleur": string,
    "notes": [
        {
            "code": string,
            "libelle": string
        }
    ],
    "horaires": [
        {
            "heure": string,
            "passages": [
                string
            ]
        }
    ],
    "prochainsHoraires": [
        {
            "heure": string,
            "passages": [
                string
            ]
        }
    ],
    "plageDeService": string
}
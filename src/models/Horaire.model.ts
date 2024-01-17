export type Horaire = {
    "ligne": {
        "numLigne": string,
        "typeligne": 0,
        "directionSens1": string,
        "directionSens2": string,
        "accessible": string,
        "etatTrafic": 0
    },
    "arret": {
        "codeArret": string,
        "libelle": string,
        "accessible": true
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
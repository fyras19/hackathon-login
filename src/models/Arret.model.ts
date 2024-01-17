export type Arret =
    {
        id: number,
        "codeLieu": string,
        "libelle": string,
        "distance": string,
        "ligne": [
            {
                "numLigne": string
            }
        ]
    }
export type Event = {
    id_manif: string;
    nom: string;
    description: string;
    libelle_festival: string | null;
    emetteur: string;
    rubrique: string;
    categorie_1: string;
    categorie_2: string | null;
    categorie_3: string | null;
    categorie_4: string | null;
    categorie_5: string | null;
    precisions_public: string;
    accueil_enfant: 'oui' | 'non';
    date: string;
    heure_debut: string;
    heure_fin: string | null;
    complet: 'oui' | 'non';
    annule: 'oui' | 'non';
    reporte: 'oui' | 'non';
    date_report: string | null;
    organisateurs: string | null;
    lieu: string;
    adresse: string;
    ville: string;
    code_postal: string;
    lieu_quartier: string;
    lieu_siteweb: string | null;
    lieu_tel: string | null;
    lieu_email: string | null;
    gratuit: 'oui' | 'non';
    precisions_tarifs: string | null;
    carte_blanche: 'oui' | 'non';
    info_suppl: string | null;
    h_auditif: 'oui' | 'non';
    h_hyperacousie: 'oui' | 'non';
    h_intellectuel: 'oui' | 'non';
    h_lsf: 'oui' | 'non';
    h_moteur: 'oui' | 'non';
    h_psychique: 'oui' | 'non';
    h_visuel: 'oui' | 'non';
    lien_agenda: string;
    latitude: number;
    longitude: number;
    location: string;
    type: string;
    courriel: string | null;
    libelle_courriel: string | null;
    libelle_site: string | null;
    libelle_telephone: string | null;
    media_url: string;
    telephone: string | null;
    url_site: string | null;
    location_latlong: {
        lon: number;
        lat: number;
    };
    location_lieu: {
        lon: number;
        lat: number;
    };
}

export type EventsResponse = {
    total_count: number,
    results: Event[]
}
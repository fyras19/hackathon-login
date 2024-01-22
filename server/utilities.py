import requests
def scraping(url, theme) :
    categories = set()
    refine = 'rubrique:"'+theme+'"'
    response = requests.get(url,params={"limit":100,"refine":refine,"offset":0}).json()
    total_count = response["total_count"]
    res = response["results"]
    for r in res:
        key = "categorie_"
        for i in range(1, 6):
            if r[key + str(i)]:
                categories.add(r[key + str(i)])
    offset = 100
    while offset <= total_count :
        response = requests.get(url, params={"limit": 100, "refine": refine, "offset": offset}).json()
        res = response["results"]
        for r in res :
            key = "categorie_"
            for i in range(1,6):
                if r[key+str(i)] :
                    categories.add(r[key+str(i)])
        offset += 100
    return categories

def get_theme_cat_dict():
    url='https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-nantes-metropole/records'
    themes = ['Sport', 'Culture', 'Dialogue Citoyen', 'Evénements Emploi']
    theme_cat_dict = dict()
    for t in themes:
        L= list(scraping(url,t))
        theme_cat_dict[t] = L
    return theme_cat_dict

def get_city_names():
    city_names = ["Nantes", "Saint-Herblain", "Carquefou",
                  "Rezé", "Saint-Sébastien-sur-Loire", "Sainte-Luce-sur-Loire",
                  "Saint-Aignan de Grand Lieu", "Bouguenais", "La Chapelle-sur-Erdre",
                  "Couëron", "Vertou", "Orvault", "Basse-Goulaine", "Indre"]
    return city_names

def get_hood_names():
    hood_names = ["Centre Ville", "Ile de Nantes", "Malakoff - Saint-Donatien", "Bellevue - Chantenay - Sainte",
                  "Anne Centre", "Hauts Pavés - Saint Félix", "Nantes Nord", "Doulon - Bottière", "Dervallières - Zola",
                  "Château de Rezé", "Nantes Erdre", "Est", "Villages Centre Sud Est",
                  "Rousselière - Portereau - Chêne", "- Drouillet", "Bois-St-Louis/Plaisance/Ferrière/Val d'Or",
                  "Bourg", "Couëts 2", "Nantes Sud", "Pont Rousseau", "Breil - Barberie", "Croix Jeannette", "Nord"]

    return hood_names

def get_organizer_names():
    organizer_names = ["Ville de Nantes", "Bibliothèque de Nantes", "Musée d'Arts", "Développement", "Associatif",
                       "Museum d'Histoire", "Naturelle", "Ville de Saint Herblain", "Patrimoine", "Ville D-Orvault",
                       "ACCOORD", "Ville de Saint Aignan de 40", "Grand Lieu", "Ville de Saint Sébastien", "Sur Loire",
                       "Ville de Sainte Luce", "Conservatoire", "Ville de Bouguenais", "STEREOLUX", "Ville de Rezé",
                       "Ville de Couëron", "LES FABRIQUES", "BDC-CCAS", "Ville de Basse-Goulaine",
                       "ARCHIVES DEPARTEMENTALES", "ECOLE DES BEAUX ARTS"]
    return organizer_names

def get_theme_names():
    theme_names = ["Culture", "Sport", "Dialogue Citoyen", "Evénements Emploi"]
    return theme_names

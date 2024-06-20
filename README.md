# Rendu Olivier PERDRIX Hono 🔥- Mongoose - Ts

_Copier le .env.example en un fichier .env_
  

-  `npm install`
-  `npm run dev`

## Architecture des entités

### flippers

```json
{
    "name": "Nom du flipper",
    "description": "Description en html",
    "brand": "id d'une marque de la collection brands",
    "versions": [{
		"name": "Nom des versions supplémentaires",
		"link": "URL de la page de cette version"
	}],
    "slug": "slug utilisé pour ce flipper",

    "isNewProduct": "Est-ce un nouveau produit mis en avant ?",
    "secondHand": "Est-ce un produit d'occasion ?",
    "isCrush": "Est-ce un coup de coeur mis en avant ?",
    "quantity": "Quantité",
    "arrivalDate": "Date du prochain arrivage",
    "isContactUs": "Affichage de la mention 'nous contacter'",

    "images": ["URL des images"],
    "firstImage": "URL de l'image mise en vignette",
    "video": "URL de la vidéo incorporée",

    "price": "Prix du flipper",
    "year": "Année de parrution",
    "rate": "Note",
    "dimensions": "Dimentions du flipper",
    "weight": "Poids du flipper",
}

```
Un dataset est disponible dans le dossier datasets

Pour la gestion des quantités et des ruptures de stocks, j'ai choisis plusieurs champs.
- quantity
- isContactUs
  
J'ai constaté 3 status différents :
- En stock : _Quantité > 0 et isContactUs à false_
- Nous consulter : _isContactUs à true_
- Rupture de stock : _Quantité = 0 et isContactUs à false_

Pour la description j'ai choisi de récupérer tout le texte en html. On peut imaginer un éditeur de rich-text dans l'administration.


### marques

```json
{
    "name": "Nom de la marque",
    "title": "Titre de la page d'affichage de la marque",
    "description": "Texte de description en haut de la page de la marque",
    "information": "Texte d'information en bas de la page de la marque",
    "logo": "URL du logo de la marque",
    "slug": "slug de la page de la marque",
}
```
Un dataset est disponible dans le dossier datasets

Pour les marques, on retrouve toutes ces informations sur la page de filtre par marque.
On a un titre, une description en haut et une description en bas.
On retrouve aussi le logo de la marque sur les pages produits.

## Optimisation

Pour améliorer la fonction de recherche, j'opterai pour un *find* de mongoose avec une regexp pour une recherche pertinente.

Pour améliorer la présentation des listes de flippers,

## Extractions

Les extractions de ma BDD sont présentes dans le dossier datasets
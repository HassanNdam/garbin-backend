
# Garbin API

Garbin API est une API permettant aux utilisateurs de gérer une garde-robe numérique.

## Prérequis

- Docker & Docker Compose
- Node.js v16+
- Make

## Installation

1. Clonez le projet :
    ```bash
    git clone https://github.com/votre-compte/garbin-api.git
    cd garbin-api
    ```

2. Configurez vos variables d'environnement dans `.env` (demandez aux contributeurs du projet pour obtenir les valeurs) :
    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=3306
    DATABASE_USER=root
    DATABASE_PASSWORD=yourpassword
    DATABASE_NAME=garbin_db

    JWT_SECRET=your_secret_key
    CLOUDINARY_URL=your_cloudinary_url
    FIREBASE_API_KEY=your_firebase_api_key
    ```

## Démarrage

1. Démarrez les containers Docker :
    ```bash
    make up
    ```

2. Accédez au shell du conteneur :
    ```bash
    make shell
    ```

3. Exécutez les migrations :
    ```bash
    npm run migration:run
    ```

4. Démarrez l'application en mode développement :
    ```bash
    npm run server
    ```
   
La documentation de l'API est accessible sur `http://localhost:5001/docs`.

L'API est maintenant accessible sur `http://localhost:5001/api`.

## Tests et qualité du code

Avant de pousser du code, exécutez les tests et vérifiez la qualité :
```bash
npm run qa-ta
```

## Contribution

1. Forkez le projet.
2. Créez une branche (`git checkout -b feature/ma-nouvelle-fonctionnalité`).
3. Faites vos modifications.
4. Vérifiez les tests (`npm run qa-ta`).
5. Poussez votre branche et ouvrez une Pull Request.

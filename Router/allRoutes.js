import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html",["disconnected"],"/js/auth/signup.js"),
    new Route("/go", "Covoiturage", "/pages/go.html",["clients"]),
    new Route("/account", "Mon compte", "/pages/auth/account.html",["clients","admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html",["clients","admin"]),
];

/*
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html","/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html","/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
];
*/
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";
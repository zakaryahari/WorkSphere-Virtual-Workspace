🏢 WorkSphere — Gestion Visuelle et Interactive du Personnel

WorkSphere est une application web innovante permettant de gérer, visualiser et organiser en temps réel l’affectation des employés sur un plan d’étage virtuel.
Le système applique automatiquement des règles métier strictes afin de garantir que chaque employé est positionné dans une zone autorisée selon son rôle.

🔗 Déploiement en Ligne

GitHub Pages : https://zakaryahari.github.io/WorkSphere-Virtual-Workspace/

Lien de l’Application : (identique au-dessus si c'est votre déploiement principal)

Trello : WorkSphere – Virtual Workspace (ajoute ici le lien exact vers ton board Trello)

✨ Objectifs Principaux

Organisation Facile : Visualiser précisément l’emplacement de chaque employé.

Respect des Règles Métier : Assignation stricte selon les rôles vs zones autorisées.

Expérience Utilisateur Optimisée : Interface fluide, intuitive et entièrement responsive.

🚀 Fonctionnalités Implémentées
I. Gestion du Personnel & Formulaires

Liste des Employés Non-Assignés via une sidebar dédiée.

Modale d’Ajout/Édition avec formulaire complet (Nom, Rôle, Email, Téléphone…).

Gestion Dynamique des Expériences Professionnelles (ajout/suppression de blocs).

Prévisualisation en Temps Réel de la photo de profil via URL.

Validation des Champs (Nom, Email, Téléphone, Rôle).

II. Carte Interactive & Affectation (Core Logic)

Plan d’Étage divisé en 6 zones (ex : Réception, Salle des Serveurs…).

Règles Métier (FP-02) :

Technicien IT → Salle des Serveurs uniquement

Réceptionniste → Réception uniquement

Manager → Accès illimité

Assignation par Bouton “+” : n’affiche que les employés compatibles + zone non saturée.

Affichage Dynamique des employés assignés dans chaque zone.

Désaffectation via bouton “X” pour renvoyer l’employé dans la liste principale.

III. Design & Expérience Utilisateur

Responsive Design grâce à Flexbox et CSS Grid, optimisé Desktop → Mobile.

Design Moderne basé sur Tailwind CSS pour un rendu sobre et professionnel.

💻 Technologies Utilisées
Catégorie	Technologie	Rôle dans le Projet
Langage	JavaScript (ES6+)	Logique métier, CRUD, DOM, Event Delegation
Structure	HTML5	Structure sémantique de l'application
Design/CSS	Tailwind CSS	Styling rapide, responsive design
Versioning	Git / GitHub	Gestion du code source, collaboration

# 🏢 WorkSphere
### Rapport de Finalisation du Projet Interactif
**Projet Front-End Complet – WorkSphere Studio**

---

## 🎯 Résumé Exécutif
Ce document atteste de la finalisation du projet **WorkSphere**, une application web innovante dédiée à la **gestion visuelle et interactive du personnel** sur un plan d'étage virtuel.

L'objectif était de créer une **solution complète d'organisation spatiale** en temps réel, intégrant des **règles métier strictes** (rôles vs zones autorisées) et offrant une **expérience utilisateur (UX) fluide et entièrement responsive**. Le cœur du projet repose sur la **manipulation du DOM** et la **logique conditionnelle** d'affectation.

---

## 🛠️ Achèvements Techniques Clés (Logique et Interface)

### 1. 👥 Gestion du Personnel et Opérations CRUD (Ajout/Édition)
- **Liste Non-Assignée** : Affichage dynamique des employés non encore affectés dans une sidebar dédiée (`list_employee` où `isactive: null`).
- **Modal d'Ajout/Édition** : Implémentation d'une fenêtre modale unique pour la saisie des données des employés.
- **Expériences Dynamiques** : Gestion dynamique des sous-formulaires pour l'ajout et la suppression des blocs **Expériences Professionnelles** (via `Add_employee_experience()` et `delete_employee_experience()`).
- **Prévisualisation Photo** : Affichage en temps réel de la photo de profil par URL d'entrée.

### 2. 🛡️ Validation et Règles de Saisie
- **Validation Réactive** : Mise en œuvre des fonctions `Valide_input_regex` et `Valide_experience_regex` pour la validation des champs (`Nom`, `Email`, `Téléphone`, `Entreprise`, `Rôle`) en temps réel (`input event`).
- **Règles Regex** : Utilisation d'expressions régulières pour garantir la conformité des formats de données critiques.
- **Validation du Rôle** : Vérification de la sélection du rôle avant la soumission (`Valide_Radio_Option`).

### 3. 🗺️ Logique d'Affectation Spatiale (Règles Métier)
- **Plan d'Étage Interactif** : Rendu des **6 zones** prédéfinies (ex: Réception, Salle des Serveurs) avec leurs règles associées (via l'objet `ZONE_RULES`).
- **Logique d'Éligibilité** : Le bouton d'assignation ("+") filtre les employés disponibles en fonction de deux critères :
    1.  **Rôle compatible** avec la zone (`allowedRoles`).
    2.  **Capacité maximale** de la zone non atteinte (`nombre_max`).
- **Désaffectation** : Fonctionnalité de retrait via un bouton "X" sur la carte de l'employé, renvoyant immédiatement l'employé dans la liste "Non-Assignés" et mettant à jour la zone (`map_content` event listener).

---

## 💻 Technologies Clés

| Catégorie | Technologie | Rôle dans le Projet |
| :--- | :--- | :--- |
| **Langage** | **JavaScript (ES6+)** | Logique métier complète, Manipulation du DOM, Gestion des événements, Validation. |
| **Structure** | **HTML5** | Structure sémantique de l'application. |
| **Design/CSS** | **Tailwind CSS** | Styling rapide, conception moderne et professionnelle, mise en page Flexbox/Grid. |
| **Versioning** | **Git / GitHub** | Gestion du code source et déploiement. |

---

## 💡 Auteur du Projet
👨‍💻 **Zakarya Hari**
📧 [zakariahari42@gmail.com](mailto:zakariahari42@gmail.com)
🌐 **GitHub Pages** – [Lien du projet](https://zakaryahari.github.io/WorkSphere-Virtual-Workspace/)
📋 **Trello Board** – [WorkSphere – Virtual Workspace](#) *(Ajouter ici le lien exact vers votre board Trello)*

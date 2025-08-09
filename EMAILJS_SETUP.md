# Configuration EmailJS - Guide Complet

## Problème actuel

L'erreur "The Public Key is invalid" indique que les clés EmailJS ne sont pas configurées correctement.

## Solution étape par étape

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Confirmez votre email

### 2. Configurer le service Email

1. Connectez-vous à votre dashboard EmailJS
2. Allez dans "Email Services" (dans le menu de gauche)
3. Cliquez sur "Add New Service"
4. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
5. Suivez les instructions pour autoriser EmailJS
6. **Notez le Service ID** (ex: `service_abc123def`)

### 3. Créer un template d'email

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez votre template avec ces variables :

   ```
   Sujet: Nouveau message de {{user_name}}

   Contenu:
   Nom: {{user_name}}
   Email: {{from_name}}
   Message: {{message}}
   ```

4. **Notez le Template ID** (ex: `template_xyz789abc`)

### 4. Obtenir votre clé publique

1. Allez dans "Account" → "API Keys"
2. **Copiez votre Public Key** (ex: `user_def456ghi`)

### 5. Mettre à jour votre code

Dans le fichier `src/content_option.js`, remplacez les valeurs par défaut :

```javascript
const contactConfig = {
  YOUR_EMAIL: "malekfhihi@gmail.com",
  YOUR_FONE: "+216 25 992 977",
  description: "N'hésitez pas à me contacter...",
  YOUR_SERVICE_ID: "service_abc123def", // Votre vrai Service ID
  YOUR_TEMPLATE_ID: "template_xyz789abc", // Votre vrai Template ID
  YOUR_USER_ID: "user_def456ghi", // Votre vraie Public Key
};
```

### 6. Tester la configuration

1. Redémarrez votre serveur de développement
2. Allez sur la page Contact
3. Remplissez le formulaire et envoyez un message
4. Vérifiez que vous recevez l'email

## Exemple de template EmailJS

```html
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{from_name}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

## Sécurité

- Ne partagez jamais vos clés EmailJS publiquement
- Utilisez des variables d'environnement en production
- Limitez les emails par jour si nécessaire

## Support

Si vous avez des problèmes :

- Consultez la [documentation EmailJS](https://www.emailjs.com/docs/)
- Vérifiez que toutes les clés sont correctes
- Assurez-vous que votre service email est actif

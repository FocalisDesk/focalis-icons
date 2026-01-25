📐 Règles SVG pour Focalis Icons

Ce document décrit les règles strictes à respecter pour créer et modifier les icônes SVG de Focalis Icons. Ces règles garantissent la cohérence visuelle et la compatibilité avec Fantasticon pour la génération de polices web.

🎯 Spécifications techniques obligatoires

ViewBox standard

· Taille unique : Toutes les icônes doivent avoir un viewBox de 0 0 24 24
· Format exact : <svg viewBox="0 0 24 24">
· Pas d'exception, toutes les icônes doivent être conçues dans cet espace 24x24

Structure minimale

· Un seul élément <svg> contenant un ou plusieurs éléments <path>
· Pas de <g>, <defs>, <style>, <symbol>, <use>
· Pas de commentaires dans le code SVG
· Pas d'attributs inutiles (id, data-name, class, etc.)

Format monochrome

· Couleur unique : Tous les tracés doivent être en noir (#000000) ou sans couleur définie
· Pas de dégradés ni de remplissages multiples
· Pas de <stroke> : utiliser exclusivement des <path> avec fill
· L'icône doit être entièrement remplie (pas de contours)

Exemple de format correct

```svg
<svg viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
```

📝 Conventions de nommage

Fichiers

· kebab-case uniquement : lettres minuscules séparées par des traits d'union
· Format : nom-de-l-icone.svg
· Exemples corrects :
  · user-profile.svg
  · arrow-right.svg
  · settings-cog.svg

À éviter

· ❌ userProfile.svg (camelCase)
· ❌ user_profile.svg (snake_case)
· ❌ USER-PROFILE.svg (majuscules)
· ❌ arrow.right.svg (points)
· ❌ icon-user.svg (préfixe inutile)

🎨 Cohérence visuelle entre styles

Règles générales

1. Même sémantique : Une icône doit représenter le même concept dans tous les styles
2. Mêmes proportions : La taille apparente doit être similaire
3. Mêmes détails : Le niveau de détail doit être cohérent

Spécificités par style

Regular Rounded (rr)

· Épaisseur de trait : 1.5px-2px
· Rayon d'arrondi : 2px pour les angles droits
· Style : Moderne, légèrement arrondi, amical

Thin Rounded (tr)

· Épaisseur de trait : 1px-1.5px
· Rayon d'arrondi : 1.5px pour les angles droits
· Style : Élégant, minimaliste, précis

Checklist de cohérence

· Les deux styles utilisent la même grille de 24x24
· Les points d'ancrage visuels sont alignés
· Le niveau de détail est proportionnel
· L'icône est reconnaissable dans les deux styles

🛠️ Optimisation SVG

Simplification des tracés

· Utiliser le moins de points d'ancrage possible
· Simplifier les courbes de Bézier
· Éviter les tracés superflus
· Fusionner les formes quand c'est possible

Outils recommandés

1. Figma pour la conception (export avec plugin SVG Optimizer)
2. SVGO pour l'optimisation automatique
3. SVGOMG pour l'optimisation visuelle en ligne

Commande SVGO recommandée

```bash
npx svgo --multipass --config='{
  "plugins": [
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeEditorsNSData",
    "cleanupAttrs",
    "mergeStyles",
    "inlineStyles",
    "minifyStyles",
    "cleanupIDs",
    "removeUselessDefs",
    "cleanupNumericValues",
    "convertColors",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "removeViewBox",
    "cleanupEnableBackground",
    "removeHiddenElems",
    "removeEmptyText",
    "convertShapeToPath",
    "convertEllipseToCircle",
    "moveElemsAttrsToGroup",
    "moveGroupAttrsToElems",
    "collapseGroups",
    "convertPathData",
    "convertTransform",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "mergePaths",
    "removeUnusedNS",
    "sortAttrs",
    "removeTitle",
    "removeDesc",
    "removeDimensions",
    "removeAttrs",
    "removeElementsByAttr",
    "addClassesToSVGElement",
    "removeStyleElement",
    "removeScriptElement"
  ]
}' icon.svg -o icon-optimized.svg
```

✅ Checklist avant commit

Structure SVG

· ViewBox = 0 0 24 24
· Pas d'attributs inutiles (id, data-name, etc.)
· Un seul élément <svg> racine
· Seulement des éléments <path> à l'intérieur
· Pas de <g>, <defs>, <style>
· Pas de commentaires dans le code

Apparence

· Icône monochrome (noir ou sans couleur)
· Pas de <stroke>, seulement fill
· Icône entièrement visible dans le viewBox
· Pas de parties coupées ou hors canvas

Nommage

· Nom en kebab-case (minuscules, traits d'union)
· Pas de préfixe "icon-" inutile
· Nom descriptif et clair
· Extension .svg en minuscules

Cohérence

· L'icône existe dans les deux styles (si applicable)
· Même sémantique visuelle entre styles
· Mêmes proportions et points d'ancrage
· Vérifiée visuellement côte à côte

Qualité

· Tracés optimisés (minimum de points)
· Pas de chevauchements inutiles
· Courbes lisses
· Testée dans la police générée

🚫 Problèmes courants à éviter

Exemple incorrect (à ne PAS faire)

```svg
<!-- ❌ TROP D'ATTRIBUTS, STRUCTURE COMPLEXE -->
<svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
  <defs>
    <style>.cls-1{fill:#ff0000;}</style>
  </defs>
  <g id="icon">
    <path class="cls-1" d="m21.25 5c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75zm1.75 7.5c0 4.061..."/>
    <rect x="5" y="5" width="14" height="14" stroke="#000" stroke-width="1"/>
  </g>
</svg>
```

Problèmes :

1. Attributs inutiles (id, data-name)
2. Élément <defs> avec <style>
3. Élément <g> inutile
4. Mélange de <path> et <rect>
5. Utilisation de stroke

Exemple correct

```svg
<!-- ✅ FORMAT MINIMAL ET PROPRE -->
<svg viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
```

🔧 Correction d'un SVG existant

Pour corriger l'exemple fourni :

```svg
<!-- AVANT (incorrect) -->
<svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m21.25 5c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75zm1.75 7.5c0 4.061-.916 5.5-3.5 5.5s-3.5-1.439-3.5-5.5.916-5.5 3.5-5.5 3.5 1.439 3.5 5.5zm-1 0c0-4.187-.99-4.5-2.5-4.5s-2.5.313-2.5 4.5.99 4.5 2.5 4.5 2.5-.313 2.5-4.5zm-16.482-.638c.771-.558.982-1.391.982-2.14 0-1.242-.521-2.723-3-2.723-1.085 0-1.859.269-2.368.82-.187.203-.174.52.029.707.203.186.519.174.707-.029.304-.33.854-.498 1.632-.498 1.758 0 2 .828 2 1.723 0 .827-.284 1.777-2.5 1.777-.276 0-.5.224-.5.5s.224.5.5.5c2.355 0 3 .43 3 2 0 1.846-.654 2.5-2.5 2.5-.771 0-1.334-.126-1.722-.385-.229-.155-.54-.092-.694.137s-.092.54.137.693c.557.373 1.302.555 2.278.555 2.388 0 3.5-1.112 3.5-3.5 0-1.508-.612-2.263-1.482-2.638zm9.482 2.638c0 2.421-1.08 3.5-3.5 3.5s-3.5-1.079-3.5-3.5v-2c0-3.567.637-5.5 4-5.5.497 0 1.085.045 1.576.12.273.042.46.297.418.57-.042.272-.298.46-.57.418-.443-.067-.976-.108-1.424-.108-2.051 0-2.875.588-2.985 3.71.571-.473 1.382-.71 2.485-.71 2.42 0 3.5 1.079 3.5 3.5zm-1 0c0-1.869-.631-2.5-2.5-2.5s-2.5.631-2.5 2.5.631 2.5 2.5 2.5 2.5-.631 2.5-2.5z"/></svg>

<!-- APRÈS (correct) -->
<svg viewBox="0 0 24 24">
  <path d="m21.25 5c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75zm1.75 7.5c0 4.061-.916 5.5-3.5 5.5s-3.5-1.439-3.5-5.5.916-5.5 3.5-5.5 3.5 1.439 3.5 5.5zm-1 0c0-4.187-.99-4.5-2.5-4.5s-2.5.313-2.5 4.5.99 4.5 2.5 4.5 2.5-.313 2.5-4.5zm-16.482-.638c.771-.558.982-1.391.982-2.14 0-1.242-.521-2.723-3-2.723-1.085 0-1.859.269-2.368.82-.187.203-.174.52.029.707.203.186.519.174.707-.029.304-.33.854-.498 1.632-.498 1.758 0 2 .828 2 1.723 0 .827-.284 1.777-2.5 1.777-.276 0-.5.224-.5.5s.224.5.5.5c2.355 0 3 .43 3 2 0 1.846-.654 2.5-2.5 2.5-.771 0-1.334-.126-1.722-.385-.229-.155-.54-.092-.694.137s-.092.54.137.693c.557.373 1.302.555 2.278.555 2.388 0 3.5-1.112 3.5-3.5 0-1.508-.612-2.263-1.482-2.638zm9.482 2.638c0 2.421-1.08 3.5-3.5 3.5s-3.5-1.079-3.5-3.5v-2c0-3.567.637-5.5 4-5.5.497 0 1.085.045 1.576.12.273.042.46.297.418.57-.042.272-.298.46-.57.418-.443-.067-.976-.108-1.424-.108-2.051 0-2.875.588-2.985 3.71.571-.473 1.382-.71 2.485-.71 2.42 0 3.5 1.079 3.5 3.5zm-1 0c0-1.869-.631-2.5-2.5-2.5s-2.5.631-2.5 2.5.631 2.5 2.5 2.5 2.5-.631 2.5-2.5z"/>
</svg>
```

Changements appliqués :

1. Supprimé id="Layer_1"
2. Supprimé xmlns="http://www.w3.org/2000/svg" (implicite dans SVG)
3. Supprimé data-name="Layer 1"
4. Conservé uniquement viewBox="0 0 24 24"

📞 Support et questions

Pour toute question concernant ces règles :

1. Consultez d'abord les icônes existantes comme référence
2. Vérifiez avec la commande npm run build:all que l'icône se génère correctement
3. Ouvrez une issue sur GitHub si vous avez un cas spécifique

Rappel : Le non-respect de ces règles empêchera la génération correcte des polices et pourrait bloquer les builds automatiques.
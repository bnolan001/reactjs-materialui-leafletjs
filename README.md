# react-nw4cbz

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-nw4cbz)
This is a demonstration of a problem I ran into when getting Leaflet incorporated in a project using react-leaflet.  After checking that the Leaflet CSS was included properly in the index.html, chasing my tail for far too long, then inched through the components in my project to find any potential problems.  The culprit ended up being a parent component with an image element CSS definition.  

In this case, to fix the problem, remove, or change the IMG definition in styles.css.
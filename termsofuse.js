// Create a new HTML structure to insert
const newHtmlStructure = document.createElement('div')
newHtmlStructure.innerHTML = `
   <h2>Terms of Use</h2>
   <ol>
     <li>Item 1</li>
     <li>Item 2</li>
     <li>Item 3</li>
   </ol>
 `

// Get the container element by its ID
const container = document.getElementById('termsofuse')

container.appendChild(newHtmlStructure)

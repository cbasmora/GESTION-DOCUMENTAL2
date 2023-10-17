const documentList = [
    { name: "Documento-1.pdf", path:"pdfs\Documento-1"},
    { name: "Documento 2.pdf", path: "C:\Users\Moraris\Desktop\DESARROLLOS\GESTION-DOCUMENTAL\pdfs" },
    { name: "Documento 3.pdf", path: "path/to/document3.pdf" }
    // Agrega más documentos según sea necesario
];

const searchInput = document.getElementById("search");
const documentListContainer = document.getElementById("document-list");

searchInput.addEventListener("input", updateDocumentList);

function updateDocumentList() {
    const searchTerm = searchInput.value.toLowerCase();
    documentListContainer.innerHTML = "";

    documentList.forEach((document) => {
        if (document.name.toLowerCase().includes(searchTerm)) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${document.path}" target="_blank">${document.name}</a>`;
            documentListContainer.appendChild(listItem);
        }
    });
}

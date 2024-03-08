
import Formulario from '../scripts/Formulario.js';

const formularioInstance = Formulario;

function createDocumentRow(documento, index) {
    const tr = document.createElement('tr');
    tr.className = 'container-mt5';


    const tdArquivo = document.createElement('td');
    tdArquivo.className = "custom-file";
    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.className = 'form-control';
    inputFile.addEventListener('change', (e) => formularioInstance.handleUploadDocument(e, index));
    tdArquivo.appendChild(inputFile);
    inputFile.required = true 

    const tdDeleteButton = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger';
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => {
        formularioInstance.handleDeleteDocument(index); // Call handleDeleteDocument method from Formulario instance
        renderDocumentosTable(); // Re-render the entire documentos table
    });
    tdDeleteButton.appendChild(deleteButton);

    const tdViewButton = document.createElement('td');
    const viewButton = document.createElement('button');
    viewButton.type = 'button';
    viewButton.className = 'btn btn-primary see';
    viewButton.textContent = 'Ver';
    viewButton.addEventListener('click', () => formularioInstance.handleViewDocument(index));
    tdViewButton.appendChild(viewButton);

    // tr.appendChild(tdNome);
    tr.appendChild(tdArquivo);
    tr.appendChild(tdDeleteButton);
    tr.appendChild(tdViewButton);

    return tr;
}

function handleAddDocumentoAndUpdateTable() {
    formularioInstance.handleAddDocument();
    renderDocumentosTable();
}

function createAddDocumentoButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary col-md-12';
    button.textContent = 'Adicionar outro anexo';
    button.addEventListener('click', handleAddDocumentoAndUpdateTable);
    return button;
}

function renderDocumentosTable() {
    // Get the existing container
    const container = document.getElementById('documentos-container');

    // Clear the existing content
    container.innerHTML = '';

    // Create new elements
    const h3 = document.createElement('h3');
    h3.textContent = 'Anexos';
    container.appendChild(h3);

    const table = document.createElement('table');
    table.className = 'table';

    const tbody = document.createElement('tbody');

    formularioInstance.formData.documentos.forEach((documento, index) => {
        const row = createDocumentRow(documento, index);
        tbody.appendChild(row);
    });

    const addDocumentoButton = createAddDocumentoButton();
    tbody.appendChild(addDocumentoButton);

    table.appendChild(tbody);
    container.appendChild(table);
}

const formContainer = document.getElementById('form-container');

const documentosContainer = document.createElement('div');
documentosContainer.id = 'documentos-container';
formContainer.appendChild(documentosContainer); // Append it to the form container

renderDocumentosTable();

export default renderDocumentosTable;

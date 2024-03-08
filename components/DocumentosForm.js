import Formulario from '../scripts/Formulario.js'


function DocumentosTable() {
    const table = document.createElement('div');
    table.className = 'container-mt5';

    const h3 = document.createElement('h3');
    h3.textContent = 'Anexos';
    table.appendChild(h3);

    const tableElement = document.createElement('table');
    tableElement.className = 'table';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const thNome = document.createElement('th');
    thNome.textContent = 'Nome';
    const thArquivo = document.createElement('th');
    thArquivo.textContent = 'Arquivo';

    thead.appendChild(thNome);
    thead.appendChild(thArquivo);

    Formulario.formData.documentos.forEach((documento, index) => {
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        const inputNome = document.createElement('input');
        inputNome.type = 'text';
        inputNome.className = 'form-control';
        inputNome.name = 'nome';
        inputNome.value = documento.nome;
        inputNome.addEventListener('input', (e) => Formulario.handleProductsAndDocsChange(e, index, 'documentos'));
        tdNome.appendChild(inputNome);

        const tdArquivo = document.createElement('td');
        tdArquivo.className = "custom-file"
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.className = 'form-control';
        inputFile.addEventListener('change', (e) => Formulario.handleUploadDocument(e, index));
        tdArquivo.appendChild(inputFile);

        const tdDeleteButton = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'btn btn-danger';
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => Formulario.handleDeleteDocument(index));
        tdDeleteButton.appendChild(deleteButton);

        const tdViewButton = document.createElement('td');
        const viewButton = document.createElement('button');
        viewButton.type = 'button';
        viewButton.className = 'btn btn-primary see';
        viewButton.textContent = 'Ver';
        viewButton.addEventListener('click', () => Formulario.handleViewDocument(index));
        tdViewButton.appendChild(viewButton);

        tr.appendChild(tdNome);
        tr.appendChild(tdArquivo);
        tr.appendChild(tdDeleteButton);
        tr.appendChild(tdViewButton);

        tbody.appendChild(tr);
    });

    tableElement.appendChild(thead);
    tableElement.appendChild(tbody);

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.className = 'btn btn-primary col-md-12';
    addButton.textContent = 'Adicionar outro anexo';
    addButton.addEventListener('click', Formulario.handleAddDocumento);

    table.appendChild(tableElement);
    table.appendChild(addButton);

    return table;
}

const formContainer = document.getElementById('form-container');
formContainer.appendChild(DocumentosTable())

export default DocumentosTable;

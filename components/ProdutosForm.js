import Formulario from '../scripts/Formulario.js'

const formularioInstance = new Formulario();

// function createProductRow(product, index) {
//     const tr = document.createElement('tr');
//     tr.className = 'container-mt-5';
    
//     const rowDiv = document.createElement('div');
//     rowDiv.className = 'row';
    
//     const deleteColumn = document.createElement('div');
//     deleteColumn.className = 'col-md-2';
    
//     const deleteButtonDiv = document.createElement('div');
//     deleteButtonDiv.className = 'd-flex justify-content-center align-items-center h-100';
    
//     const deleteButton = document.createElement('button');
//     deleteButton.type = 'button';
//     deleteButton.className = 'btn btn-danger';
//     deleteButton.textContent = 'Excluir';
//     deleteButton.addEventListener('click', () => formularioInstance.handleDeleteProduct(index));
    
//     deleteButtonDiv.appendChild(deleteButton);
//     deleteColumn.appendChild(deleteButtonDiv);
//     rowDiv.appendChild(deleteColumn);
    
//     const productColumn = document.createElement('div');
//     productColumn.className = 'col-md-10';
    
//     const productTd = document.createElement('td');
//     productTd.className = 'row';
    
//     const productLabel = document.createElement('label');
//     productLabel.htmlFor = 'Produto';
//     productLabel.className = 'form-label';
//     productLabel.textContent = `Produto - ${index + 1}`;
    
//     const productInput = document.createElement('input');
//     productInput.type = 'text';
//     productInput.className = 'form-control';
//     productInput.name = 'descricao';
//     productInput.value = product.descricao;
//     productInput.addEventListener('input', (e) => formularioInstance.handleProductsAndDocsChange(e, index));
//     productInput.required = true;
    
//     productTd.appendChild(productLabel);
//     productTd.appendChild(productInput);
    
//     const detailsRowDiv = document.createElement('div');
//     detailsRowDiv.className = 'row';
//     const containerDiv = document.createElement('div');
//     containerDiv.className = 'container mt-3';
    
//     const unitMeasureColumn = document.createElement('td');
//     unitMeasureColumn.className = 'col-md-2';
//     const unitMeasureLabel = document.createElement('label');
//     unitMeasureLabel.htmlFor = 'unidade';
//     unitMeasureLabel.className = 'form-label';
//     unitMeasureLabel.textContent = 'UND. Medida';
//     const unitMeasureSelect = document.createElement('select');
//     unitMeasureSelect.className = 'form-control';
//     unitMeasureSelect.name = 'unidadeMedida';
//     unitMeasureSelect.value = product.unidadeMedida;
//     unitMeasureSelect.addEventListener('change', (e) => formularioInstance.handleProductsAndDocsChange(e, index));
//     unitMeasureSelect.required = true;
//     const options = ['Selecione...', 'Kg', 'g', 'L', 'mL'];
//     options.forEach(option => {
//         const optionElement = document.createElement('option');
//         optionElement.value = option.toLowerCase();
//         optionElement.textContent = option;
//         unitMeasureSelect.appendChild(optionElement);
//     });
//     unitMeasureColumn.appendChild(unitMeasureLabel);
//     unitMeasureColumn.appendChild(unitMeasureSelect);
    
//     // Repeat the process for other detail columns (Quantidade em Estoque, Valor Unitário, Valor Total)
    
//     detailsRowDiv.appendChild(containerDiv);
//     containerDiv.appendChild(unitMeasureColumn);
//     // Append other detail columns here
    
//     productColumn.appendChild(productTd);
//     productColumn.appendChild(detailsRowDiv);
//     rowDiv.appendChild(productColumn);
//     tr.appendChild(rowDiv);
    
//     console.log("passei aqui")
//     return tr;
// }
function createProductRow(product, index) {
    const tr = document.createElement('tr');
    tr.className = 'container-mt-5';
    
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    
    const deleteColumn = document.createElement('div');
    deleteColumn.className = 'col-md-2';
    
    const deleteButtonDiv = document.createElement('div');
    deleteButtonDiv.className = 'd-flex justify-content-center align-items-center h-100';
    
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger';
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => {
        formularioInstance.handleDeleteProduct(index); // Call handleDeleteProduct method from Formulario instance
        // After deleting the product, you may want to update the entire form
        renderProdutosTable(); // Re-render the entire produtos table
    });
    
    deleteButtonDiv.appendChild(deleteButton);
    deleteColumn.appendChild(deleteButtonDiv);
    rowDiv.appendChild(deleteColumn);
    
    const productColumn = document.createElement('div');
    productColumn.className = 'col-md-10';
    
    const productTd = document.createElement('td');
    productTd.className = 'row';
    
    const productLabel = document.createElement('label');
    productLabel.htmlFor = 'Produto';
    productLabel.className = 'form-label';
    productLabel.textContent = `Produto - ${index + 1}`;
    
    const productInput = document.createElement('input');
    productInput.type = 'text';
    productInput.className = 'form-control';
    productInput.name = 'descricao';
    productInput.value = product.descricao;
    productInput.addEventListener('input', (e) => {
        formularioInstance.handleProductsAndDocsChange(e, index); // Call handleProductsAndDocsChange method from Formulario instance
    });
    productInput.required = true;
    
    productTd.appendChild(productLabel);
    productTd.appendChild(productInput);
    
    const detailsRowDiv = document.createElement('div');
    detailsRowDiv.className = 'row';
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container mt-3';
    
    const unitMeasureColumn = document.createElement('td');
    unitMeasureColumn.className = 'col-md-2';
    const unitMeasureLabel = document.createElement('label');
    unitMeasureLabel.htmlFor = 'unidade';
    unitMeasureLabel.className = 'form-label';
    unitMeasureLabel.textContent = 'UND. Medida';
    const unitMeasureSelect = document.createElement('select');
    unitMeasureSelect.className = 'form-control';
    unitMeasureSelect.name = 'unidadeMedida';
    unitMeasureSelect.value = product.unidadeMedida;
    unitMeasureSelect.addEventListener('change', (e) => {
        formularioInstance.handleProductsAndDocsChange(e, index); // Call handleProductsAndDocsChange method from Formulario instance
    });
    unitMeasureSelect.required = true;
    const options = ['Selecione...', 'Kg', 'g', 'L', 'mL'];
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase();
        optionElement.textContent = option;
        unitMeasureSelect.appendChild(optionElement);
    });
    unitMeasureColumn.appendChild(unitMeasureLabel);
    unitMeasureColumn.appendChild(unitMeasureSelect);
    
    //Quantid. em estoque
    const stockAmountColumn = document.createElement('td');
    stockAmountColumn.className = 'col-md-2';
    const stockAmountLabel = document.createElement('label');
    stockAmountLabel.htmlFor = 'quantidade';
    stockAmountLabel.className = 'form-label';
    stockAmountLabel.textContent = 'QTDE. em Estoque';
    const stockAmountInput = document.createElement('input');
    stockAmountInput.className = 'form-control';
    stockAmountInput.name = 'quantidadeEstoque';
    stockAmountInput.type = "number"
    stockAmountInput.value = product.quantidadeEstoque;
    stockAmountInput.addEventListener('change', (e) => {
        formularioInstance.handleProductsAndDocsChange(e, index); // Call handleProductsAndDocsChange method from Formulario instance
    });
    stockAmountColumn.appendChild(stockAmountLabel);
    stockAmountColumn.appendChild(stockAmountInput);

    //Valor unit
    const unitValueColumn = document.createElement('td');
    unitValueColumn.className = 'col-md-2';
    const unitValueLabel = document.createElement('label');
    unitValueLabel.htmlFor = 'valorUnitario';
    unitValueLabel.className = 'form-label';
    unitValueLabel.textContent = 'Valor unitário';
    const unitValueInput = document.createElement('input');
    unitValueInput.className = 'form-control';
    unitValueInput.name = 'valorUnitario';
    unitValueInput.type = "number"
    unitValueInput.value = product.quantidadeEstoque;
    unitValueInput.addEventListener('change', (e) => {
        formularioInstance.handleProductsAndDocsChange(e, index); // Call handleProductsAndDocsChange method from Formulario instance
    });
    unitValueColumn.appendChild(unitValueLabel);
    unitValueColumn.appendChild(unitValueInput);

    //Valor total
    const valorTotalColumn = document.createElement('td');
    valorTotalColumn.className = 'col-md-2';
    
    const valorTotalLabel = document.createElement('label');
    valorTotalLabel.htmlFor = 'valorTotal';
    valorTotalLabel.className = 'form-label';
    valorTotalLabel.textContent = 'Valor Total';
    
    const valorTotalInput = document.createElement('input');
    valorTotalInput.type = 'number';
    valorTotalInput.className = 'form-control';
    valorTotalInput.name = 'valorTotal';
    valorTotalInput.value = product.valorTotal;
    valorTotalInput.readOnly = true;
    
    valorTotalInput.addEventListener('change', (e) => {
        formularioInstance.handleProductsAndDocsChange(e, index); // Call handleProductsAndDocsChange method from Formulario instance
    });
    
    valorTotalColumn.appendChild(valorTotalLabel);
    valorTotalColumn.appendChild(valorTotalInput);
    
    
    detailsRowDiv.appendChild(containerDiv);
    containerDiv.appendChild(unitMeasureColumn);
    containerDiv.appendChild(stockAmountColumn);
    containerDiv.appendChild(unitValueColumn);
    containerDiv.appendChild(valorTotalColumn);

    // Append other detail columns here
    
    productColumn.appendChild(productTd);
    productColumn.appendChild(detailsRowDiv);
    rowDiv.appendChild(productColumn);
    tr.appendChild(rowDiv);
    
    return tr;
}

function handleAddProductAndUpdateTable() {
    formularioInstance.handleAddProduct();
    renderProdutosTable(formularioInstance);
}

function createAddProductButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary col-md-12';
    button.textContent = 'Adicionar Produto';
    button.addEventListener('click', handleAddProductAndUpdateTable);
    return button;
}


// function renderProdutosTable() {
//     const div = document.createElement('div');
    
//     const h2 = document.createElement('h2');
//     h2.textContent = 'Produtos';
//     div.appendChild(h2);
    
//     const table = document.createElement('table');
//     table.className = 'table';
    
//     const tbody = document.createElement('tbody');
    
//     formularioInstance.formData.produtos.forEach((produto, index) => {
//         const row = createProductRow(produto, index, formularioInstance.handleDeleteProduct, formularioInstance.handleProductsAndDocsChange);
//         tbody.appendChild(row);
//     });
    
//     const addProductButton = createAddProductButton(formularioInstance.handleAddProduct);
    
//     tbody.appendChild(addProductButton);
//     table.appendChild(tbody);
//     div.appendChild(table);
    
//     return div;
// }

function renderProdutosTable() {
    console.log(JSON.stringify(formularioInstance.formData.produtos))

    const div = document.createElement('div');
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Produtos';
    div.appendChild(h2);
    
    const table = document.createElement('table');
    table.className = 'table';
    
    const tbody = document.createElement('tbody');
    
    formularioInstance.formData.produtos.forEach((produto, index) => {
        console.log(formularioInstance.formData.produtos)
        const row = createProductRow(produto, index);
        tbody.appendChild(row);
    });
    
    const addProductButton = createAddProductButton();
    
    tbody.appendChild(addProductButton);
    table.appendChild(tbody);
    div.appendChild(table);
    
    return div;
}

// Get the container element in your HTML where you want to append the form
const container = document.getElementById('form-container');

// Call the renderProdutosTable function and append the generated table to the container
container.appendChild(renderProdutosTable());
// Get the container element in your HTML where you want to append the form
// const container = document.getElementById('form-container');

// Call the FornecedorForm function and append the generated form to the container
// container.appendChild(createProductRow());
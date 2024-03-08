import Formulario from '../scripts/Formulario.js'

const formularioInstance = Formulario;

function createProductRow(product, index) {
    console.log("entrou aqui no createproductrow")
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


// const unitMeasureSelect = document.createElement('select');
// unitMeasureSelect.className = 'form-control';
// unitMeasureSelect.name = 'unidadeMedida';
// unitMeasureSelect.addEventListener('change', (e) => {
//     formularioInstance.handleProductsAndDocsChange(e, index); // Call handleProductsAndDocsChange method from Formulario instance
// });
// unitMeasureSelect.required = true;

// // Create the "Selecione..." option
// const defaultOption = document.createElement('option');
// defaultOption.value = '';
// defaultOption.textContent = 'Selecione...';
// defaultOption.disabled = true;
// defaultOption.selected = true; // Make it the default option

// // Create other options
// const options = ['Kg', 'g', 'L', 'mL'];
// options.forEach(option => {
//     const optionElement = document.createElement('option');
//     optionElement.value = option.toLowerCase();
//     optionElement.textContent = option;
//     unitMeasureSelect.appendChild(optionElement);
// });

// // Add the default option as the first child of the select element
// unitMeasureSelect.insertBefore(defaultOption, unitMeasureSelect.firstChild);
// const unitMeasureSelect = document.createElement('select');
// unitMeasureSelect.className = 'form-control';
// unitMeasureSelect.name = 'unidadeMedida';
// unitMeasureSelect.addEventListener('change', (e) => {
//     formularioInstance.handleProductsAndDocsChange(e, index); // Call handleProductsAndDocsChange method from Formulario instance
// });
// unitMeasureSelect.required = true;

// // Create the placeholder option
// const placeholderOption = document.createElement('option');
// placeholderOption.value = '';
// placeholderOption.textContent = 'Selecione uma unidade...';
// placeholderOption.disabled = true;
// placeholderOption.selected = true; // Make it the default option

// // Create other options
// const options = ['Kg', 'g', 'L', 'mL'];
// options.forEach(option => {
//     const optionElement = document.createElement('option');
//     optionElement.value = option.toLowerCase();
//     optionElement.textContent = option;
//     if (option.toLowerCase() === Formulario.formData.produtos[index].unidadeMedida) {
//         optionElement.selected = true; // Set selected attribute if it matches the stored value
//     }
//     unitMeasureSelect.appendChild(optionElement);
// });

// // Add the placeholder option as the first child of the select element
// unitMeasureSelect.insertBefore(placeholderOption, unitMeasureSelect.firstChild);

// unitMeasureColumn.appendChild(unitMeasureSelect);

const unitMeasureSelect = document.createElement('select');
unitMeasureSelect.className = 'form-control';
unitMeasureSelect.name = 'unidadeMedida';
unitMeasureSelect.addEventListener('change', (e) => {
    const selectedOption = e.target.value;
    formularioInstance.formData.produtos[index].unidadeMedida = selectedOption; // Update formData
});

// Create options for unit measurements
const unitMeasurements = ['Selecione...', 'Kg', 'g', 'L', 'mL'];
// unitMeasurements.forEach(unit => {
//     const optionElement = document.createElement('option');
//     optionElement.value = unit.toLowerCase();
//     optionElement.textContent = unit;
//     if (unit.toLowerCase() === Formulario.formData.produtos[index].unidadeMedida) {
//         optionElement.selected = true; // Set selected attribute if it matches the stored value
//     }
unitMeasurements.forEach((unit, i) => {
    const optionElement = document.createElement('option');
    optionElement.value = unit.toLowerCase();
    optionElement.textContent = unit;
    if (i === 0) {
        optionElement.disabled = true; // Disable the first option ("Selecione...")
        optionElement.selected = true; // Set selected attribute for the default option
    } else if (unit.toLowerCase() === Formulario.formData.produtos[index].unidadeMedida) {
        optionElement.selected = true; // Set selected attribute if it matches the stored value
    }
    unitMeasureSelect.appendChild(optionElement);
});

// Append the select element to the container
unitMeasureColumn.appendChild(unitMeasureLabel);
unitMeasureColumn.appendChild(unitMeasureSelect);

    
    //Quantid. em estoque
    const stockAmountColumn = document.createElement('td');
    stockAmountColumn.className = 'col-md-2';
    const stockAmountLabel = document.createElement('label');
    stockAmountLabel.htmlFor = 'quantidade';
    stockAmountLabel.className = 'form-label';
    stockAmountLabel.textContent = 'Qtde. em Estoque';
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
    unitValueInput.value = product.valorUnitario;
    unitValueInput.addEventListener('input', (e) => {
        formularioInstance.handleProductsAndDocsChange(e, index); // Call handleProductsAndDocsChange method from Formulario instance
        renderProdutosTable()
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
    
        // Re-render the produtos table
        renderProdutosTable();
    
    
}

function createAddProductButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary col-md-12';
    button.textContent = 'Adicionar outro Produto';
    button.addEventListener('click', handleAddProductAndUpdateTable);
    return button;
}



function renderProdutosTable() {
    console.log(JSON.stringify(formularioInstance.formData.produtos))

    // Get the existing div container
    const container = document.getElementById('produtos-container');

    // Clear the existing content
    container.innerHTML = '';

    // Create new elements
    const h3 = document.createElement('h3');
    h3.textContent = 'Produtos';
    container.appendChild(h3);

    const table = document.createElement('table');
    table.className = 'table';
    
    const tbody = document.createElement('tbody');
    console.log('Formulario.formData:', Formulario.formData);

    Formulario.formData.produtos.forEach((produto, index) => {
        console.log(Formulario.formData.produtos)
        console.log(`Product ${index}:`, produto);

        const row = createProductRow(produto, index);
        tbody.appendChild(row);
    });
    
    const addProductButton = createAddProductButton();
    
    tbody.appendChild(addProductButton);
    table.appendChild(tbody);
    container.appendChild(table);
}

// Get the container element in your HTML where you want to append the form
const formContainer = document.getElementById('form-container');

// Create a new container element for produtos
const produtosContainer = document.createElement('div');
produtosContainer.id = 'produtos-container'; // Set the id for identification
formContainer.appendChild(produtosContainer); // Append it to the form container

// Call the renderProdutosTable function and append the generated table to the produtos container
renderProdutosTable();


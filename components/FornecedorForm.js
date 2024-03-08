import Formulario from '../scripts/Formulario.js'


function renderForm() {
    const container = document.getElementById('fornecedor-container');

    console.log("render form")
    container.innerHTML = '';

    fornecedorContainer.appendChild(FornecedorForm());
}

// FornecedorForm function
function FornecedorForm() {
    // Create a div element to hold the form content
    const formContainer = document.createElement('div');

    // Form title
    const formTitle = document.createElement('h3');
    formTitle.textContent = 'CADASTRO FORNECEDOR/PRODUTO';
    formContainer.appendChild(formTitle);

    // Create form element
    // const form = document.createElement('form');
    // form.addEventListener('submit', handleSubmit); // Add submit event listener

    // Fornecedor section
    const fornecedorSection = document.createElement('div');
    fornecedorSection.classList.add('row');

    // Left side
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('col-md-6');

    // Razão Social input
    const razaoSocialLabel = document.createElement('label');
    razaoSocialLabel.textContent = 'Razão Social *';
    const razaoSocialInput = document.createElement('input');
    razaoSocialInput.type = 'text';
    razaoSocialInput.classList.add('form-control');
    razaoSocialInput.id = 'razaoSocial';
    razaoSocialInput.name = 'razaoSocial';
    console.log("Razao rocial singleton" + Formulario.formData.razaoSocial)
    razaoSocialInput.value = Formulario.formData.razaoSocial || '';
    razaoSocialInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
    razaoSocialInput.required = true;

    // Append Razão Social input to left column
    leftColumn.appendChild(razaoSocialLabel);
    leftColumn.appendChild(razaoSocialInput);

     


    // Nome Fantasia input
    const nomeFantasiaLabel = document.createElement('label');
    nomeFantasiaLabel.textContent = 'Nome Fantasia *';
    const nomeFantasiaInput = document.createElement('input');
    nomeFantasiaInput.type = 'text';
    nomeFantasiaInput.classList.add('form-control');
    nomeFantasiaInput.id = 'nomeFantasia';
    nomeFantasiaInput.name = 'nomeFantasia';
    nomeFantasiaInput.value = Formulario.formData.nomeFantasia || '';
    nomeFantasiaInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
    nomeFantasiaInput.required = true;

    // Append Nome Fantasia input to left column
    leftColumn.appendChild(nomeFantasiaLabel);
    leftColumn.appendChild(nomeFantasiaInput);

    // CEP input
    const cepLabel = document.createElement('label');
    cepLabel.textContent = 'CEP *';
    const cepInput = document.createElement('input');
    cepInput.type = 'number';
    cepInput.classList.add('form-control');
    cepInput.id = 'CEP';
    cepInput.name = 'CEP';
    cepInput.value = Formulario.formData.cep || '';
    cepInput.addEventListener('input', (e) => { Formulario.handleInputChange(e, renderForm) });     
    cepInput.required = true;

    // Append CEP input to left column
    leftColumn.appendChild(cepLabel);
    leftColumn.appendChild(cepInput);

    // ENDERECO input
    const enderecoLabel = document.createElement('label');
    enderecoLabel.textContent = 'Endereço *';
    const enderecoInput = document.createElement('input');
    enderecoInput.type = 'text';
    enderecoInput.classList.add('form-control');
    enderecoInput.id = 'endereco';
    enderecoInput.name = 'endereco';
    enderecoInput.value = Formulario.formData.endereco || '';
    enderecoInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
    enderecoInput.required = true;

    // Append ENDERECO input to left column
    leftColumn.appendChild(enderecoLabel);
    leftColumn.appendChild(enderecoInput);

    // Right side
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('col-md-6');

    // CNPJ input
    const CNPJLabel = document.createElement('label');
    CNPJLabel.textContent = 'CNPJ *';
    const CNPJInput = document.createElement('input');
    CNPJInput.type = 'number';
    CNPJInput.classList.add('form-control');
    CNPJInput.id = 'cnpj';
    CNPJInput.name = 'cnpj';
    CNPJInput.value = Formulario.formData.cnpj || '';
    CNPJInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
    CNPJInput.required = true;

    // Append CNPJ input to right column
    rightColumn.appendChild(CNPJLabel);
    rightColumn.appendChild(CNPJInput);

    //Append INSC ESTADUAL input to right column
    const inscEstadualLabel = document.createElement('label');
    inscEstadualLabel.textContent = 'Inscrição Estadual';
    const inscEstadualInput = document.createElement('input');
    inscEstadualInput.type = 'text';
    inscEstadualInput.classList.add('form-control');
    inscEstadualInput.id = 'inscricaoEstadual';
    inscEstadualInput.name = 'inscricaoEstadual';
    inscEstadualInput.value = Formulario.formData.inscricaoEstadual || '';
    inscEstadualInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
    inscEstadualInput.required = false;

    // Append INSC EST input to right column
    rightColumn.appendChild(inscEstadualLabel);
    rightColumn.appendChild(inscEstadualInput);

    //Append INSC MUNIC input to right column
    const inscMunicipalLabel = document.createElement('label');
    inscMunicipalLabel.textContent = 'Inscrição Municipal';
    const inscMunicipalInput = document.createElement('input');
    inscMunicipalInput.type = 'text';
    inscMunicipalInput.classList.add('form-control');
    inscMunicipalInput.id = 'inscricaoMunicipal';
    inscMunicipalInput.name = 'inscricaoMunicipal';
    inscMunicipalInput.value = Formulario.formData.inscricaoEstadual || '';
    inscMunicipalInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
    inscMunicipalInput.required = false;

    // Append INSC EST input to right column
    rightColumn.appendChild(inscMunicipalLabel);
    rightColumn.appendChild(inscMunicipalInput);
    
     //Append Numero input to right column
     const numeroLabel = document.createElement('label');
     numeroLabel.textContent = 'Número *';
     const numeroInput = document.createElement('input');
     numeroInput.type = 'number';
     numeroInput.classList.add('form-control');
     numeroInput.id = 'numero';
     numeroInput.name = 'numero';
     numeroInput.value = Formulario.formData.numero || '';
     numeroInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
     numeroInput.required = true;
 
     // Append INSC EST input to right column
     rightColumn.appendChild(numeroLabel);
     rightColumn.appendChild(numeroInput);

    

    // Append left and right columns to fornecedor section
    fornecedorSection.appendChild(leftColumn);
    fornecedorSection.appendChild(rightColumn);

    
// Complemento
const complementoLabel = document.createElement('label');
complementoLabel.textContent = 'Complemento *';
const complementoInput = document.createElement('input');
complementoInput.type = 'text';
complementoInput.classList.add('form-control');
complementoInput.id = 'complemento';
complementoInput.name = 'complemento';
complementoInput.value = Formulario.formData.complemento || '';
complementoInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
complementoInput.required = true;

// Append Complemento input
const complementoDiv = document.createElement('div');
complementoDiv.classList.add('mb-3');
complementoDiv.appendChild(complementoLabel);
complementoDiv.appendChild(complementoInput);
formContainer.appendChild(complementoDiv);

// Row 1
const row1Div = document.createElement('div');
row1Div.classList.add('row');

// Bairro
const bairroDiv = document.createElement('div');
bairroDiv.classList.add('col-md-4');
const bairroLabel = document.createElement('label');
bairroLabel.textContent = 'Bairro *';
const bairroInput = document.createElement('input');
bairroInput.type = 'text';
bairroInput.classList.add('form-control');
bairroInput.id = 'bairro';
bairroInput.name = 'bairro';
bairroInput.value = Formulario.formData.bairro || '';
bairroInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
bairroInput.required = true;
bairroDiv.appendChild(bairroLabel);
bairroDiv.appendChild(bairroInput);

// Municipio
const municipioDiv = document.createElement('div');
municipioDiv.classList.add('col-md-4');
const municipioLabel = document.createElement('label');
municipioLabel.textContent = 'Municipio *';
const municipioInput = document.createElement('input');
municipioInput.type = 'text';
municipioInput.classList.add('form-control');
municipioInput.id = 'municipio';
municipioInput.name = 'municipio';
municipioInput.value = Formulario.formData.municipio || '';
municipioInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
municipioInput.required = true;
municipioDiv.appendChild(municipioLabel);
municipioDiv.appendChild(municipioInput);

// Estado
const estadoDiv = document.createElement('div');
estadoDiv.classList.add('col-md-4');
const estadoLabel = document.createElement('label');
estadoLabel.textContent = 'Estado *';
const estadoInput = document.createElement('input');
estadoInput.type = 'text';
estadoInput.classList.add('form-control');
estadoInput.id = 'estado';
estadoInput.name = 'estado';
estadoInput.value = Formulario.formData.estado || '';
estadoInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
estadoInput.required = true;
estadoDiv.appendChild(estadoLabel);
estadoDiv.appendChild(estadoInput);

// Append Bairro, Municipio, and Estado inputs to row 1
row1Div.appendChild(bairroDiv);
row1Div.appendChild(municipioDiv);
row1Div.appendChild(estadoDiv);

// Row 2
const row2Div = document.createElement('div');
row2Div.classList.add('row');

// Contato
const contatoDiv = document.createElement('div');
contatoDiv.classList.add('col-md-4');
const contatoLabel = document.createElement('label');
contatoLabel.textContent = 'Nome da pessoa de contato *';
const contatoInput = document.createElement('input');
contatoInput.type = 'text';
contatoInput.classList.add('form-control');
contatoInput.id = 'contato';
contatoInput.name = 'contato';
contatoInput.value = Formulario.formData.contato || '';
contatoInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
contatoInput.required = true;
contatoDiv.appendChild(contatoLabel);
contatoDiv.appendChild(contatoInput);

// Telefone
const telefoneDiv = document.createElement('div');
telefoneDiv.classList.add('col-md-4');
const telefoneLabel = document.createElement('label');
telefoneLabel.textContent = 'Telefone *';
const telefoneInput = document.createElement('input');
telefoneInput.type = 'tel';
telefoneInput.classList.add('form-control');
telefoneInput.id = 'telefone';
telefoneInput.name = 'telefone';
telefoneInput.value = Formulario.formData.telefone || '';
telefoneInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
telefoneInput.required = true;
telefoneDiv.appendChild(telefoneLabel);
telefoneDiv.appendChild(telefoneInput);

// Email
const emailDiv = document.createElement('div');
emailDiv.classList.add('col-md-4');
const emailLabel = document.createElement('label');
emailLabel.textContent = 'E-mail *';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.classList.add('form-control');
emailInput.id = 'email';
emailInput.name = 'email';
emailInput.value = Formulario.formData.email || '';
emailInput.addEventListener('input', (e) => { Formulario.handleInputChange(e) });     
emailInput.required = true;
emailDiv.appendChild(emailLabel);
emailDiv.appendChild(emailInput);

// Append Contato, Telefone, and Email inputs to row 2
row2Div.appendChild(contatoDiv);
row2Div.appendChild(telefoneDiv);
row2Div.appendChild(emailDiv);

// Append form to form container
// formContainer.appendChild(form);

    // Append fornecedor section to form
    formContainer.appendChild(fornecedorSection);
    formContainer.appendChild(row1Div);
    formContainer.appendChild(complementoDiv);
    formContainer.appendChild(row2Div);

    console.log("passei aqui!!!")

    // Append form to form container
    // formContainer.appendChild(form);

    // Return the form container
    return formContainer;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here...
}



const container = document.getElementById('form-container');
const fornecedorContainer = document.createElement('div');
fornecedorContainer.id = 'fornecedor-container'; 
container.appendChild(fornecedorContainer);
renderForm();

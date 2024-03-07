// // scripts/Formulario.js

// // Define your form data structure
// let formData = {
//     razaoSocial: '',
//     nomeFantasia: '',
//     cnpj: '',
//     inscricaoEstadual: '',
//     inscricaoMunicipal: '',
//     endereco: '',
//     numero: '',
//     complemento: '',
//     cep: '',
//     contato: '',
//     telefone: '',
//     email: '',
//     descricao: '',
//     unidadeMedida: '',
//     quantidadeEstoque: '',
//     valorUnitario: '',
//     valorTotal: '',
//     documentos: [{ nome: '', arquivo: '' }],
//     produtos: [{ descricao: '', unidadeMedida: '', quantidadeEstoque: '', valorUnitario: '', valorTotal: '' }],
// };

// function setFormData(newData) {
//     formData = newData;
// }

// function handleAddProduct() {
//     const newProduct = {
//         descricao: '',
//         unidadeMedida: '',
//         quantidadeEstoque: '',
//         valorUnitario: '',
//         valorTotal: '', 
//     };

//     const newData = Object.assign({}, formData); // Creating a shallow copy of formData object

//     newData.produtos = newData.produtos.slice(); // Creating a shallow copy of produtos array
//     newData.produtos.push(newProduct); // Adding newProduct to produtos array

//     setFormData(newData);
// }
// function handleDeleteProduct(index) {
//     // Create a new array containing the produtos except the one to be deleted
//     const newProdutos = formData.produtos.filter((_, i) => i !== index);

//     // Create a new object with updated produtos array
//     const newData = {
//         ...formData,
//         produtos: newProdutos,
//     };

//     // Update the formData object
//     setFormData(newData);
// }

// function handleProductsAndDocsChange(e, index, type) {
//     const { name, value, files } = e.target;
//     const newData = Object.assign({}, formData);

//     if (type && type === 'documentos') {
//         const newDocumentos = formData.documentos.slice(); // Create a shallow copy of documentos array
//         if (name === 'arquivo') {
//             newDocumentos[index][name] = files[0].name;
//         } else {
//             newDocumentos[index][name] = value;
//         }
//         newData.documentos = newDocumentos;
//     } else {
//         const newProdutos = formData.produtos.slice(); // Create a shallow copy of produtos array
//         newProdutos[index][name] = value;

//         const quantidadeEstoque = parseFloat(newProdutos[index].quantidadeEstoque);
//         const valorUnitario = parseFloat(newProdutos[index].valorUnitario);
//         const valorTotal = quantidadeEstoque * valorUnitario;
//         newProdutos[index].valorTotal = isNaN(valorTotal) ? '' : valorTotal.toFixed(2);

//         newData.produtos = newProdutos;
//     }

//     setFormData(newData);
// }



// // Define your form submission handler
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Implement form submission logic here
//     // This function will be called when the form is submitted
//     // You can access form data using the formData object
//     // Display loading modal
//     $('#loadingModal').addClass('show');
//     try {
//         // Perform form submission logic (e.g., send data to server)
//         console.log('Form submitted:', formData);
//         // Simulate loading delay (remove this in production)
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         console.log('Form data saved successfully!');
//     } catch (error) {
//         console.error('Error submitting form:', error);
//     } finally {
//         // Hide loading modal
//         $('#loadingModal').removeClass('show');
//     }
// };

// // Attach form submission handler
// $('#formulario').submit(handleSubmit);

// // Implement other form functionalities (e.g., input change handlers) similarly
// // Use jQuery to manipulate the DOM and handle events
// // scripts/Formulario.js

// // Function to generate input fields for the form
// function generateFormFields() {
//     const formContainer = document.getElementById('formulario');

//     // Clear existing content
//     formContainer.innerHTML = '';

//     // Create and append input fields for each form field
//     Object.keys(formData).forEach(fieldName => {
//         const inputContainer = document.createElement('div');
//         inputContainer.classList.add('form-group');

//         const label = document.createElement('label');
//         label.textContent = fieldName; // Use the field name as the label
//         inputContainer.appendChild(label);

//         const input = document.createElement('input');
//         input.type = 'text';
//         input.name = fieldName;
//         input.value = formData[fieldName]; // Populate input with current value
//         input.addEventListener('input', handleInputChange); // Add event listener for input change
//         inputContainer.appendChild(input);

//         formContainer.appendChild(inputContainer);
//     });
// }

// // Function to handle input change and update formData object
// function handleInputChange(event) {
//     const { name, value } = event.target;
//     formData[name] = value;
// }

// // Function to generate the form and attach event listener
// function initializeForm() {
//     generateFormFields();
//     const form = document.getElementById('formulario');
//     form.addEventListener('submit', handleSubmit);
// }

// function handleChange(event, index, type) {
//     const { name, value } = event.target;

//     // Update formData based on the input name and value
//     if (type && type === 'documentos') {
//         // Handle changes in document inputs
//         const newDocumentos = [...formData.documentos];
//         newDocumentos[index][name] = value;
//         formData.documentos = newDocumentos;
//     } else {
//         // Handle changes in product inputs
//         const newProdutos = [...formData.produtos];
//         newProdutos[index][name] = value;
//         formData.produtos = newProdutos;
//     }
// }






// // Call initializeForm function when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', initializeForm);
// export default { setFormData, handleAddProduct, handleDeleteProduct, handleProductsAndDocsChange } 


// scripts/Formulario.js

class Formulario {
    constructor() {
        // Default form data structure with empty string values
        this.formData = {
            razaoSocial: '',
            nomeFantasia: '',
            cnpj: '',
            inscricaoEstadual: '',
            inscricaoMunicipal: '',
            endereco: '',
            numero: '',
            complemento: '',
            cep: '',
            contato: '',
            telefone: '',
            email: '',
            descricao: '',
            unidadeMedida: '',
            quantidadeEstoque: '',
            valorUnitario: '',
            valorTotal: '',
            documentos: [{ nome: '', arquivo: '' }],
            produtos: [{ descricao: '', unidadeMedida: '', quantidadeEstoque: '', valorUnitario: '', valorTotal: '' }],
        };

        // this.loadingModal = document.getElementById('loadingModal');
        // this.formContainer = document.getElementById('formulario');

        // Bind event handlers to ensure correct 'this' context
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
        this.handleProductsAndDocsChange = this.handleProductsAndDocsChange.bind(this);

        // Attach form submission handler
        // this.formContainer.addEventListener('submit', this.handleSubmit);

        // Generate form fields
    }


    // Method to handle input change and update formData object
    handleInputChange(event) {
        const { name, value } = event.target;
        this.formData[name] = value;
    }

    // Method to handle form submission
    async handleSubmit(event) {
        event.preventDefault();
        // Display loading modal
        this.loadingModal.classList.add('show');
        try {
            // Perform form submission logic (e.g., send data to server)
            console.log('Form submitted:', this.formData);
            // Simulate loading delay (remove this in production)
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Form data saved successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            // Hide loading modal
            this.loadingModal.classList.remove('show');
        }
    }

    // Method to handle adding a new product
    handleAddProduct(descricao, medida, quantidade, unidade, total) {
        const newProduct = {
            descricao: descricao,
            unidadeMedida: medida,
            quantidadeEstoque: quantidade,
            valorUnitario: unidade,
            valorTotal: total, 
        };

        this.formData.produtos.push(newProduct);
        console.log(this.formData.produtos[-1])

        // Regenerate form fields
    }

    // Method to handle deleting a product
    handleDeleteProduct(index) {
        this.formData.produtos.splice(index, 1);

        // Regenerate form fields
        // this.generateFormFields();
    }

    // Method to handle changes in product and document inputs
    handleProductsAndDocsChange(e, index, type) {
        const { name, value, files } = e.target;

        if (type && type === 'documentos') {
            if (name === 'arquivo') {
                this.formData.documentos[index][name] = files[0].name;
            } else {
                this.formData.documentos[index][name] = value;
            }
        } else {
            this.formData.produtos[index][name] = value;

            const quantidadeEstoque = parseFloat(this.formData.produtos[index].quantidadeEstoque);
            const valorUnitario = parseFloat(this.formData.produtos[index].valorUnitario);
            const valorTotal = quantidadeEstoque * valorUnitario;
            this.formData.produtos[index].valorTotal = isNaN(valorTotal) ? '' : valorTotal.toFixed(2);
        }
    }
}

// Export Formulario class
export default Formulario;

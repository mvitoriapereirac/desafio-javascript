
class Formulario {

    constructor() {
        if (!Formulario.instance) {
            // Initialize the instance if it doesn't exist
            Formulario.instance = this;

            // Initialize formData
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

            // Rest of your initialization code...
        }

        // If instance already exists, return it
        return Formulario.instance;
    }


    // Method to handle input change and update formData object
    async handleInputChange(event, callback) {
        const { name, value } = event.target;
        this.formData[name] = value;
        console.log(name + value);


        if (name === 'CEP' && value.length === 8) {
            console.log("entrou no if CEP "+ $(value) )

            if (value.length <= 8) {
                this.formData.cep = value;
            }

            try {
                console.log("entrou no try CEP "+ $(value) )

                let endereco = await this.handleCEP(value);
                console.log("entrei aq" + JSON.stringify(endereco));
                this.formData.endereco = endereco.logradouro;
                this.formData.bairro = endereco.bairro;
                this.formData.municipio = endereco.localidade;
                this.formData.estado = endereco.uf;
                this.formData.complemento = endereco.complemento;
                console.log("entrou no try CEP "+ JSON.stringify(this.formData ))

                callback()

            } catch(error) {
                console.error('Error fetching CEP:', error);
            }
        }
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
    handleAddProduct() {
        
        const newProduct = {
            descricao: '',
            unidadeMedida: '',
            quantidadeEstoque: '',
            valorUnitario: '',
            valorTotal: '', 
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

     handleCEP = async (CEP) => {
         console.log("entrou no CEP "+ $(CEP) )
        try {
             const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
             if (!response.ok) {
                 throw new Error('Failed to fetch');
             }
             const data = await response.json();
             console.log(data); // Dados retornados pela API
             return data;
         } catch (error) {
             console.error('Erro ao buscar o CEP:', error);
             throw error;
         }
    };

}
const shared = new Formulario();
// Export Formulario class
export default shared;

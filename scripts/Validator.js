// $(function(){
//     var $registerForm = $("#myForm");
//     if ($registerForm.length) {
//         $registerForm.validate({
//             rules:{
//                 razaoSocial:{
//                     required: true
//                 }
//             },
//             messages:{
//                 razaoSocial:{
//                     required: 'Esse campo é obrigatório. \n'
//                 }
//             }
//         })
//     }
// })
// main.js
$(document).ready(function() {

    $.validator.addMethod("numberFormat", function(value, element) {
        // Regex pattern to allow only numbers
        var pattern = /^\d+$/;
        // Test if the value matches the pattern
        return this.optional(element) || pattern.test(value);
    }, "Por favor, digite apenas números.");

    $.validator.addMethod("phoneLength", function(value, element) {
        // Remover todos os caracteres não numéricos do valor
        var cleanNumber = value.replace(/\D/g, '');
        // Verificar se o número de dígitos é igual a 11
        return this.optional(element) || cleanNumber.length === 11;
    }, "O número de telefone deve ter 11 dígitos.");

    $.validator.addMethod("cepLength", function(value, element) {
        // Remover todos os caracteres não numéricos do valor
        var cleanNumber = value.replace(/\D/g, '');
        // Verificar se o número de dígitos é igual a 11
        return this.optional(element) || cleanNumber.length === 8;
    }, "O número de CEP deve ter 8 dígitos.");

    // Initialize jQuery Validator

    $('#myForm').validate({
        // Specify validation rules
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            cep: {
                numberFormat: true,
                required: true,
                cepLength: true

            },
            telefone: {
                numberFormat: true,
                required: true,
                phoneLength: true 
            }
        },
        // Specify validation error messages
        messages: {
            name: 'Por favor digite seu nome',
            email: {
                required: 'Por favor digite seu email',
                email: 'Por favor digite um endereço válido de email'
            },
            cep: {
                required: 'Por favor digite seu CEP',
                numberFormat: 'Por favor digite um CEP válido'
            }
        },
        // Submit handler
        submitHandler: function(form) {
            // Form is valid, proceed with form submission
            console.log('Form submitted successfully!');
            form.submit();
        }
    });
});

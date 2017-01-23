$('#login').click(function() {
    var loginGrtr = G$('John', 'Doer');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
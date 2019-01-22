function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function() {
    $('#submit').click(function() {

        $('#blah')
            .attr('src', $('#urlbox').val());
        $('#gen_cap').show();
        $('#gen_cap')
            .attr('href', "http://34.73.18.246/infer?url=" + $('#blah').attr('src'));
        

    });

    // $('#gen_cap').click(function() {

    //     console.log("http://34.73.18.246/infer?url=" + $('#blah').attr('src'));
    //     $.ajax({
    //         url: "http://34.73.18.246/infer?url=" + $('#blah').attr('src'),
    //         type: 'GET',
    //         success: function(res) {
    //             console.log(res);
    //             $("#caption").text(res);
    //         }
    //     });

    //});

});
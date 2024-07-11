$(document).ready(function () {
    // Manejar la vista de cuadrícula
    $('#grid-view-btn').click(function () {
        $('#instagram-feed').show();
        $('#single-post-view').hide();
    });

    // Manejar la vista de una sola publicación
    $('#single-view-btn').click(function () {
        var allPostsContent = '';
        $('#instagram-feed .feed-card').each(function () {
            var imgSrc = $(this).find('img').attr('src');
            var title = $(this).find('img').data('title');
            var description = $(this).find('img').data('description');
            var postContent = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${imgSrc}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                        </div>
                    </div>
                </div>
            `;
            allPostsContent += postContent;
        });
        $('#single-post-view').html(allPostsContent);
        $('#instagram-feed').hide();
        $('#single-post-view').show();
    });

    // Mostrar modal para nuevo post
    $('#new-post-btn').click(function () {
        $('#newPostModal').modal('show');
    });

    // Manejar el envío del formulario de nuevo post
    $('#new-post-form').submit(function (e) {
        e.preventDefault();

        var title = $('#post-title').val();
        var description = $('#post-description').val();
        var imageUrl = $('#post-image-url').val();
        var imageFile = $('#post-image-file')[0].files[0];

        if (imageFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var newPostContent = `
                    <div class="col-md-4 col-sm-6 mb-4">
                        <div class="card">
                            <img src="${e.target.result}" class="card-img-top" alt="..." data-title="${title}" data-description="${description}">
                        </div>
                    </div>
                `;
                $('#instagram-feed').append(newPostContent);
            }
            reader.readAsDataURL(imageFile);
        } else if (imageUrl) {
            var newPostContent = `
                <div class="col-md-4 col-sm-6 mb-4">
                    <div class="card">
                        <img src="${imageUrl}" class="card-img-top" alt="..." data-title="${title}" data-description="${description}">
                    </div>
                </div>
            `;
            $('#instagram-feed').append(newPostContent);
        }

        $('#newPostModal').modal('hide');
        $('#new-post-form')[0].reset();
    });

    // Mostrar input de tipo file al hacer clic en el ícono de cámara
    $('#upload-image-btn').click(function () {
        $('#post-image-file').click();
    });

    // Manejar el cambio de sesión
    $('.dropdown-item').click(function () {
        var session = $(this).data('session');
        if (session) {
            alert('Changing to ' + session);
            // Aquí puedes agregar la lógica para cargar las publicaciones de la sesión seleccionada.
            // Por ahora, solo muestra una alerta.
        }
    });

    // Manejar el cierre de sesión
    $('#logout').click(function () {
        alert('Logging out');
        // Aquí puedes agregar la lógica para cerrar la sesión del usuario.
        // Por ahora, solo muestra una alerta.
    });
});

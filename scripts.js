$(document).ready(function () {
    $('#grid-view-btn').click(function () {
        $('#instagram-feed').show();
        $('#single-post-view').hide();
    });

    $('#single-view-btn').click(function () {
        $('#instagram-feed').hide();
        var singlePostContent = `
            <div class="card">
                <img src="./img/corgi.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Título de la Publicación</h5>
                    <p class="card-text">Descripción detallada de la publicación.</p>
                </div>
            </div>
        `;
        $('#single-post-view').html(singlePostContent);
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

        var newPostContent = `
            <div class="col-md-4 col-sm-6 feed-card">
                <div class="card">
                    <img src="${imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
            </div>
        `;

        $('#instagram-feed').append(newPostContent);
        $('#newPostModal').modal('hide');
        $('#new-post-form')[0].reset();
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
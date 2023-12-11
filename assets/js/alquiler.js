const propiedadesAlquiler = [
    {
        nombre: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa blanca, con las 3 B',
        src: 'https://images.unsplash.com/photo-1520637645622-6740bb3491c3?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Muy solitaria, alejada de todo',
        ubicacion: '167 Chuchunco City',
        habitaciones: 3,
        banos: 1,
        costo: 190,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Propiedad muy rustica',
        src: 'https://images.unsplash.com/photo-1592676720632-e0f4741e1f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Muy cerca de la casa de Pangal',
        ubicacion: '29 Cajon Del Maipo',
        habitaciones: 10,
        banos: 5,
        costo: 3010,
        smoke: true,
        pets: false
    },
    {
        nombre: 'En la cima de la Montana',
        src: 'https://images.unsplash.com/photo-1546593064-053d21199be1?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Lejos de la ciudad, cerca del cielo',
        ubicacion: '123, Penalolen Alto',
        habitaciones: 20,
        banos: 10,
        costo: 99990,
        smoke: false,
        pets: false
    }
];

function renderAlquiler() {
    let contenedor;

    let cantidad;

    if (document.getElementById('propiedadesAlquilerIndex')) {
        contenedor = document.getElementById('propiedadesAlquilerIndex');
        cantidad = 3;
    } else if (document.getElementById('propiedadesAlquiler')) {
        contenedor = document.getElementById('propiedadesAlquiler');
        cantidad = propiedadesAlquiler.length;
    }

    for (let i = 0; i < cantidad; i++) {
        const propiedad = propiedadesAlquiler[i];

        const divCol = document.createElement('div');
        divCol.className = 'col-md-4 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        divCol.appendChild(cardDiv);

        const img = document.createElement('img');
        img.src = propiedad.src;
        img.className = 'card-img-top';
        img.alt = propiedad.nombre;
        cardDiv.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardDiv.appendChild(cardBody);

        cardBody.innerHTML = `
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
        `;

        contenedor.appendChild(divCol);
    }
}

document.addEventListener('DOMContentLoaded', renderAlquiler);

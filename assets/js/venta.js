const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento cocina amplia',
        src: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Excelente propiedad con una cocina amplia',
        ubicacion: '123 Calle San Cristobal, Santiago, RM',
        habitaciones: 2,
        banos: 1,
        costo: 3000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Depto en el centro de Santiago ',
        src: 'https://images.unsplash.com/photo-1569152811536-fb47aced8409?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Para amoblar',
        ubicacion: '210 Santiago, RM',
        habitaciones: 3,
        banos: 1,
        costo: 4020,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa de campo muy acogedora',
        src: 'https://images.unsplash.com/photo-1557275134-5a789e9607be?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Amplia propiedad de un color rojo intenso',
        ubicacion: '12056, Rancagua',
        habitaciones: 5,
        banos: 3,
        costo: 90000,
        smoke: false,
        pets: false
    }
];

function renderVenta() {
    let contenedor;

    let cantidad;

    if (document.getElementById('propiedadesVentaIndex')) {
        contenedor = document.getElementById('propiedadesVentaIndex');
        cantidad = 3;
    } else if (document.getElementById('propiedadesVenta')) {
        contenedor = document.getElementById('propiedadesVenta');
        cantidad = propiedadesVenta.length;
    }

    for (let i = 0; i < cantidad; i++) {
        const propiedad = propiedadesVenta[i];

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

document.addEventListener('DOMContentLoaded', renderVenta);

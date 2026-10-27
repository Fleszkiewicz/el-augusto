export interface Cabana {
    id: string;
    nombre: string;
    capacidad: string;
    descripcion: string;
    caracteristicas: string[];
    imagen: string;
}

export interface Actividad {
    id: string;
    titulo: string;
    descripcion: string;
    icono: string;
    imagen: string;
}

export const DATOS_HOSPEDAJE = {
    nombre: "El Augusto",
    ubicacion: "Baradero, Buenos Aires",
    contacto: {
        whatsapp: "5491123456789", // Reemplazar por número real
        telefono: "+54 9 11 2345-6789",
        email: "contacto@elaugusto.com",
        facebook: "https://facebook.com/elaugusto",
        instagram: "https://instagram.com/elaugusto",
        googleMaps: "https://maps.google.com/?q=Baradero",
    },
    cabanas: [
        {
            id: "cabana-1",
            nombre: "Cabaña El Río",
            capacidad: "Hasta 8 personas",
            descripcion: "Vista directa al río con amplio deck de madera, parrilla privada y ambientes integrados.",
            caracteristicas: ["Vista al Río", "Parrilla", "Aire Acondicionado", "Wifi"],
            imagen: "/cabanas/cabana-rio.jpg"
        },
        {
            id: "cabana-2",
            nombre: "Cabaña Los Aromos",
            capacidad: "Hasta 6 personas",
            descripcion: "Ubicada en el corazón del arbolado, rodeada de sombra natural y gran tranquilidad.",
            caracteristicas: ["Cocina Equipada", "Hogar a leña", "Galería", "Wifi"],
            imagen: "/cabanas/cabana-aromos.jpg"
        },
        {
            id: "cabana-3",
            nombre: "Cabaña La Soñada",
            capacidad: "Hasta 10 personas",
            descripcion: "La más amplia del predio, ideal para familias grandes o grupos de amigos.",
            caracteristicas: ["2 Baños", "Piscina cercana", "Amplio Jardín", "Parrilla doble"],
            imagen: "/cabanas/cabana-sonada.jpg"
        }
    ] as Cabana[],
    actividades: [
        {
            id: "canotaje",
            titulo: "Canotaje en el Río",
            descripcion: "Explorá los brazos del río en nuestros kayaks equipados para todas las edades.",
            icono: "Waves",
            imagen: "/actividades/canotaje.jpg"
        },
        {
            id: "cabalgatas",
            titulo: "Paseos a Caballo",
            descripcion: "Recorridos guiados por la extensión del campo al atardecer.",
            icono: "Compass",
            imagen: "/actividades/cabalgatas.jpg"
        },
        {
            id: "caminatas",
            titulo: "Caminatas & Naturaleza",
            descripcion: "Hectáreas de verde, plantas autóctonas y espacio abierto para despejarse.",
            icono: "Trees",
            imagen: "/actividades/caminatas.jpg"
        }
    ] as Actividad[]
};
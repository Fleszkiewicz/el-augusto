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
            imagen: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "cabana-2",
            nombre: "Cabaña Los Aromos",
            capacidad: "Hasta 6 personas",
            descripcion: "Ubicada en el corazón del arbolado, rodeada de sombra natural y gran tranquilidad.",
            caracteristicas: ["Cocina Equipada", "Hogar a leña", "Galería", "Wifi"],
            imagen: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "cabana-3",
            nombre: "Cabaña La Soñada",
            capacidad: "Hasta 10 personas",
            descripcion: "La más amplia del predio, ideal para familias grandes o grupos de amigos.",
            caracteristicas: ["2 Baños", "Piscina cercana", "Amplio Jardín", "Parrilla doble"],
            imagen: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format&fit=crop"
        }
    ] as Cabana[],
    actividades: [
        {
            id: "canotaje",
            titulo: "Canotaje en el Río",
            descripcion: "Explorá los brazos del río en nuestros kayaks equipados para todas las edades. Una experiencia pacífica y en directo contacto con la fauna autóctona.",
            icono: "Waves",
            imagen: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "cabalgatas",
            titulo: "Paseos a Caballo",
            descripcion: "Recorridos guiados por la extensión del campo al atardecer. Ideal para disfrutar en familia de los senderos arbolados.",
            icono: "Compass",
            imagen: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "caminatas",
            titulo: "Caminatas & Aire Libre",
            descripcion: "Hectáreas de verde, plantas autóctonas y espacio abierto para despejarse, tomar mate y conectar con el silencio del campo.",
            icono: "Trees",
            imagen: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop"
        }
    ] as Actividad[]
};
export type Tour = {
  id: string;
  slug: string;
  nombre: string;
  categoria: string | null;
  precio_desde: number | null;
  duracion: string | null;
  temporada_ini: string | null;
  temporada_fin: string | null;
  descripcion_corta: string | null;
  descripcion_larga: string | null;
  incluye: string[];
  fotos: string[];
  orden: number;
  publicado: boolean;
  created_at: string;
  updated_at: string;
};

export type InfoGeneral = {
  id: 1;
  telefono: string | null;
  direccion: string | null;
  email: string | null;
  redes_sociales: { facebook?: string; instagram?: string };
  anios_experiencia: number | null;
  updated_at: string;
};

export type BloquePagina = {
  titulo: string;
  texto: string;
};

export type Pagina = {
  slug: string;
  titulo: string | null;
  bloques: BloquePagina[];
  updated_at: string;
};

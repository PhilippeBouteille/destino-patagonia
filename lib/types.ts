export type Tour = {
  id: string;
  slug: string;
  nombre: string;
  nombre_en?: string | null;
  nombre_fr?: string | null;
  categoria: string | null;
  precio_desde: number | null;
  duracion: string | null;
  duracion_en?: string | null;
  duracion_fr?: string | null;
  temporada_ini: string | null;
  temporada_fin: string | null;
  descripcion_corta: string | null;
  descripcion_corta_en?: string | null;
  descripcion_corta_fr?: string | null;
  descripcion_larga: string | null;
  descripcion_larga_en?: string | null;
  descripcion_larga_fr?: string | null;
  incluye: string[];
  incluye_en?: string[] | null;
  incluye_fr?: string[] | null;
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
  titulo_en?: string | null;
  titulo_fr?: string | null;
  bloques: BloquePagina[];
  bloques_en?: BloquePagina[] | null;
  bloques_fr?: BloquePagina[] | null;
  updated_at: string;
};

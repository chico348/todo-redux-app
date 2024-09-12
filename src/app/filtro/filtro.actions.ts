import { createAction, props } from "@ngrx/store";

export enum filtrosValidos {todos = 'todos',completados ='completados', pendientes ='pendientes'}

export const setFiltro = createAction('[Filtro] Set Filtro', props<{filtro: filtrosValidos}>());

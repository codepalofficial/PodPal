import {writable, derived} from 'svelte/store';
import type EpisodeData from "../lib/types/EpisodeDate";


export const episodeStore = writable([] as EpisodeData[]);
export const selectedEpisodeStore = writable(undefined as EpisodeData | undefined);
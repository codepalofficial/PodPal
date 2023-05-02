import {writable, derived} from 'svelte/store';
import type PodcastCardData from "../lib/types/PodcastCardData";


export const podcastStore = writable([] as PodcastCardData[]);
export const selectedPodcastStore = writable(undefined as PodcastCardData | undefined);
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy, limit} from 'firebase/firestore/lite';
import type EpisodeData from '../lib/types/EpisodeDate';
import type PodcastCardData from '../lib/types/PodcastCardData';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getPodcastById(id: string) {
    const docRef = doc(db, 'podcasts', id);
    const podcastSnapshot = await getDoc(docRef);
    if (!podcastSnapshot.exists()) {
        throw new Error(`Could not find podcast with id ${id}`);
    }
    const podcastData = podcastSnapshot.data() as PodcastCardData;
    return podcastData;
}

export async function getEpisodesById(id: string) {
    const colRef = collection(db, "episodes")
    const first = await query(colRef, where("podcast_id", "==", id), orderBy("release_date", "desc"), limit(25))
    const episodeSnapshots = await getDocs(first);
    const episodeList = episodeSnapshots.docs.map(doc => doc.data() as EpisodeData);
    return episodeList;
}

export async function getPodcasts() {
    const podcastCol = collection(db, 'podcasts');
    const podcastSnapshot = await getDocs(podcastCol);
    const podcastList = podcastSnapshot.docs.map(doc => doc.data() as PodcastCardData);
    return podcastList;
}
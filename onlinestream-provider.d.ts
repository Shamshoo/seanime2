declare interface Settings {
    episodeServers: string[];
    supportsDub: boolean;
}

declare interface SearchOptions {
    query: string;
}

declare interface SearchResult {
    id: string;
    title: string;
    url: string;
    subOrDub: "sub" | "dub";
    posterImage?: string;
}

declare interface EpisodeDetails {
    id: string;
    url: string;
    number: number;
    title: string;
}

declare interface VideoSource {
    url: string;
    quality: string;
    type: string;
    subtitles: Subtitle[];
}

declare interface Subtitle {
    url: string;
    lang: string;
}

declare interface EpisodeServer {
    server: string;
    headers: Record<string, string>;
    videoSources: VideoSource[];
}

export interface ComicVineSeries {
  id: string;
  name: string;
  description?: string;
  publisher?: string;
  startYear?: number;
  imageUrl?: string;
  generatedDescription: boolean;
}

export interface ComicVineIssue {
  id: string;
  issueNumber: string;
  name?: string;
  description?: string;
  coverDate?: string;
  imageUrl?: string;
  generatedDescription: boolean;
}

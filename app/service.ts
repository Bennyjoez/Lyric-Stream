import toast from "react-hot-toast";
import supabase from "./utils/supabase";

interface Lyric {
  title: string;
  singer: string;
  lyrics: string;
  audio: string;
  genre: string;
}

interface SupabaseResponse<T> {
  data: T | null;
  error: Error | null;
}

export const saveLyric = async (obj: Lyric): Promise<Lyric[] | null> => {
  const { data, error }: SupabaseResponse<Lyric[]> = await supabase
    .from('lyrics')
    .insert([
      { title: obj.title, singer: obj.singer, words: obj.lyrics, audio: obj.audio, genre: obj.genre },
    ])
    .select();

  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  
  if (!data) {
    toast.error('No data returned');
    return null;
  }
  toast.success('Lyric saved successfully!');

  return data;
};
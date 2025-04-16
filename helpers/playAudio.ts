export const playAudio = (soundName: string, volume: number = 1): void => {
  const audio = new Audio(`/sounds/${soundName}.mp3`);
  audio.volume = volume;
  audio.play();
};

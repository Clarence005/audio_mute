import React, { useState } from 'react';
import AudioPlayer from './components/audioplayer';
import MuteForm from './components/muteform';
import Card from './components/card';

function App() {
  const [mutedUrl, setMutedUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      style={{
        maxWidth: '750px',
        margin: '40px auto',
        fontFamily: 'Segoe UI, sans-serif',
        padding: '20px',
        background: 'linear-gradient(to right, #f2f2f2, #e6f0ff)'
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>Audio Mute Editor</h1>

      <Card title="Original Audio">
        <AudioPlayer id="original" url="https://audiomute-server.onrender.com/hls/output.m3u8" />
      </Card>

      <Card title="Mute Segments">
        <MuteForm setMutedUrl={setMutedUrl} setIsLoading={setIsLoading} />
      </Card>

      {isLoading && (
        <Card>
          <div style={{ textAlign: 'center', fontSize: '16px', color: '#999' }}>Processing audio...</div>
        </Card>
      )}

      {mutedUrl && (
        <Card title="Muted Audio Preview">
          <AudioPlayer id="muted" url={mutedUrl} />
        </Card>
      )}
    </div>
  );
}

export default App;

import axios from 'axios';
const api = axios.create({
  baseURL: 'http://192.168.15.7:3333'
});

export default api;

/**
 * IOs com emulador: http://localhost:3333
 * IOs com ap. Físico: IP da Máquina
 * Android com Emulador: localhost (adb reverse tcp:3333 tcp:3333)
 * android com Emulador: 10.0.2.2 (Android studio)
 * android com Emulador: 10.0.3.2 (Genymotion)
 * Android com Físico: IP da Máquina
 */
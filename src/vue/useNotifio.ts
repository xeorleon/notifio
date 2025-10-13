import { inject } from 'vue';
import type Notifio from '../Notifio';

export function useNotifio(): Notifio {
  const notifio = inject<Notifio>('notifio');
  
  if (!notifio) {
    throw new Error('useNotifio must be used within a Notifio plugin context');
  }
  
  return notifio;
}
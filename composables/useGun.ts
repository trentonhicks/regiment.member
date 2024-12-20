import Gun from 'gun/gun';
import 'gun/sea';
import 'gun/lib/radix';
import 'gun/lib/radisk';
import 'gun/lib/store';
import 'gun/lib/rindexed';
import 'gun/lib/webrtc';
import type { IGunUserInstance } from 'gun';

export function useGun() {
    const _gun = Gun();
    const _user = _gun.user().recall({ sessionStorage: true }) as IGunUserInstance;

    return {
        gun: _gun,
        user: _user,
    }
}
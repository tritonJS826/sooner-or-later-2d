import Room from "Models/Room";

class RoomService {
    /**
     * The key is a hostsId
     */
    private _rooms:  {[key: string]: Room} = {};

    constructor() {}

    createRoom(room: Room): void {
        if (this._rooms[room.roomId]) {
            throw new Error('Room already exist');
        }

        this._rooms[room.roomId] = room;
    }

    removeRoomById(roomId: string):void {
        delete this._rooms[roomId];
    }

    getRoomById(roomId: string): Room {
        return this._rooms[roomId];
    }

    /**
     * dev method
     */
    get rooms(): Room[] {
        return Object.values(this._rooms);
    }
}


export const roomService = new RoomService();
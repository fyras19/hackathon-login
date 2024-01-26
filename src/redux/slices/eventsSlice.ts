import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type EventReservation = {
    eventId: string,
    participants: {
        disallowShare: string[],
        takeOwnCar: string[],
        shareOtherCar: string[],
        onTheirOwn: string[]
    },
    cars: {
        owner: string,
        remainingPlaces: number,
        users: string[],
    }[]
}

const initialState: EventReservation[] = [];

const initiateStateFromLocalStorage = () => {
    const events = JSON.parse(localStorage.getItem("events") ?? JSON.stringify(initialState));
    return events as EventReservation[]
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState: initiateStateFromLocalStorage(),
    reducers: {
        participateAndDisallowShare: (state, action: PayloadAction<{ eventId: string, username: string }>) => {
            if (state.map(event => event.eventId).includes(action.payload.eventId)) {
                const event = state.find(_event => _event.eventId === action.payload.eventId);
                event?.participants.disallowShare.push(action.payload.username)
            } else {
                state.push({
                    eventId: action.payload.eventId,
                    participants: {
                        disallowShare: [action.payload.username],
                        onTheirOwn: [],
                        shareOtherCar: [],
                        takeOwnCar: []
                    },
                    cars: []
                })
            }
            localStorage.setItem("events", JSON.stringify(state))
        },
        participateAndTakeOwnCar: (state, action: PayloadAction<{ eventId: string, username: string, carPlaces: number, carUsers?: string[] }>) => {
            if (state.map(event => event.eventId).includes(action.payload.eventId)) {
                const event = state.find(_event => _event.eventId === action.payload.eventId);
                event?.participants.takeOwnCar.push(action.payload.username)
                event?.cars.push({
                    owner: action.payload.username,
                    remainingPlaces: action.payload.carPlaces - (action.payload.carUsers?.length ?? 0),
                    users: action.payload.carUsers ?? []
                })
            } else {
                state.push({
                    eventId: action.payload.eventId,
                    participants: {
                        disallowShare: [],
                        onTheirOwn: [],
                        shareOtherCar: [],
                        takeOwnCar: [action.payload.username]
                    },
                    cars: [{
                        owner: action.payload.username,
                        remainingPlaces: action.payload.carPlaces - (action.payload.carUsers?.length ?? 0),
                        users: action.payload.carUsers ?? []
                    }]
                })
            }
            localStorage.setItem("events", JSON.stringify(state))
        },
        participateAndShareOtherCar: (state, action: PayloadAction<{ eventId: string, username: string, carOwner?: string }>) => {
            if (state.map(event => event.eventId).includes(action.payload.eventId)) {
                const event = state.find(_event => _event.eventId === action.payload.eventId);
                event?.participants.shareOtherCar.push(action.payload.username)
                const takenCar = event?.cars.find(car => car.owner === action.payload.carOwner)
                if (takenCar) {
                    takenCar.remainingPlaces -= 1;
                    takenCar.users.push(action.payload.username)
                }
            } else {
                state.push({
                    eventId: action.payload.eventId,
                    participants: {
                        disallowShare: [],
                        onTheirOwn: [],
                        shareOtherCar: [action.payload.username],
                        takeOwnCar: []
                    },
                    cars: []
                })
            }
            localStorage.setItem("events", JSON.stringify(state))
        },
        participateOnTheirOwn: (state, action: PayloadAction<{ eventId: string, username: string }>) => {
            if (state.map(event => event.eventId).includes(action.payload.eventId)) {
                const event = state.find(_event => _event.eventId === action.payload.eventId);
                event?.participants.onTheirOwn.push(action.payload.username)
            } else {
                state.push({
                    eventId: action.payload.eventId,
                    participants: {
                        disallowShare: [],
                        onTheirOwn: [action.payload.username],
                        shareOtherCar: [],
                        takeOwnCar: []
                    },
                    cars: []
                })
            }
            localStorage.setItem("events", JSON.stringify(state))
        }
    }
})

export const { participateAndDisallowShare, participateAndShareOtherCar, participateAndTakeOwnCar, participateOnTheirOwn } = eventsSlice.actions;

export default eventsSlice.reducer;
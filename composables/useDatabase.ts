import PouchDB from 'pouchdb-browser';

const db = new PouchDB('mydb');

export function useDatabase() {
    return db;
}
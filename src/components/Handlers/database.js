// import oponDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// use hook to create database
const schedulerDB = openDatabase({name: 'Scheduler.db'});

// create constants for tables in database
const hostTableName = 'hosts';

module.exports = {
    // declare function that will create hosts table
    createHostsTable: async function () {
        // declare transaction that will execute SQL
        (await schedulerDB).transaction(txn => {
            // execute SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${hostTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    email TEXT
                );`,
                // arguments passed when using SQL prepared statements
                [],
                // callback functions to handle results
                () => {
                    console.log('Hosts table created successfully.');
                },
                error => {
                    console.log('Error creating hosts table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row of data into the hosts table
    addHost: async function (name, email) {
        // declare transaction that will execute SQL
        (await schedulerDB).transaction(txn => {
            // execute SQL
            txn.executeSql(
                `INSERT INTO ${hostTableName} (name, email) VALUES ("${name}", "${email}")`,
                // arguments passed when using SQL prepared statements
                [],
                // callback functions to handle results
                () => {
                    console.log(name + ' added successfully.');
                },
                error => {
                    console.log('Error adding host ' + error.message);
                },
            );
        });
    },
};